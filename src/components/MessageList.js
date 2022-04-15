import React, { useEffect, useState } from 'react';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { MessageItem } from './MessageItem';
import { messagesRef } from '../firebase';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflow: 'auto',
    gridRow: 1,
  },
});

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    messagesRef
      .orderByKey()
      .limitToLast(15)
      .on('value', (snapshot) => {
        const messages = snapshot.val();
        if (messages === null) return;
        const entries = Object.entries(messages);
        const formattedMessages = entries.map((entry) => {
          const [key, nameAndText] = entry;
          return {
            key: key,
            ...nameAndText,
          };
        });
        setMessages(formattedMessages);
      });
  }, []);

  return (
    <List className={classes.root}>
      {messages.map(({ key, name, text }) => {
        return <MessageItem key={key} name={name} text={text} />;
      })}
    </List>
  );
};

export default MessageList;
