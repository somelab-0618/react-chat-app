import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

import { pushMessage } from '../firebase';

const MessageField = ({ name, setText, text, inputEl }) => {
  const [isComposed, setIsComposed] = useState(false);
  return (
    <TextField
      inputRef={inputEl}
      autoFocus
      fullWidth={true}
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => {
        if (isComposed) return;

        const text = e.target.value;
        if (text === '') return;

        if (e.key === 'Enter') {
          pushMessage({ name, text });
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
