import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

const MessageField = ({ name, setText, text }) => {
  const [isComposed, setIsComposed] = useState(false);
  console.log({ text });
  return (
    <TextField
      fullWidth={true}
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => {
        if (isComposed) return;

        const text = e.target.value;
        if (text === '') return;

        if (e.key === 'Enter') {
          console.log('push message');
          setText('');
          e.preventDefault();
        }
      }}
      // 編集スタート
      onCompositionStart={() => {
        setIsComposed(true);
      }}
      // 編集完了
      onCompositionEnd={() => {
        setIsComposed(false);
      }}
    />
  );
};

export default MessageField;
