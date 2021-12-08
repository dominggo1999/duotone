import React from 'react';
import { MessageWrapper } from './Message.style';

const Message = () => {
  return (
    <MessageWrapper>
      <p>Thank You For Using <b>Duotone Generator</b>.</p>
      <p>Developed by
        {' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/dominggo1999"
        >dominggo.
        </a>
      </p>
      <p>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/dominggo1999/duotone"
        >
          Source Code.
        </a>
      </p>
    </MessageWrapper>
  );
};

export default Message;
