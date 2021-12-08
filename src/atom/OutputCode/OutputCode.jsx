import React, { useRef, useState, useContext } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import htmlbars from 'react-syntax-highlighter/dist/esm/languages/hljs/htmlbars';
import { IoMdClose } from 'react-icons/io';
import {
  OutputWrapper, CodeWrapper, OutputHeader, Title,
  Actions, ActionItem, Icon, ActionText,
} from './OutputCode.style';
import theme from './Theme';
import GenerateTemplate from './GenerateTemplate';

SyntaxHighlighter.registerLanguage('htmlbars', htmlbars);

const OutputCode = ({ closeModal }) => {
  const code = GenerateTemplate();

  const [copy, setCopy] = useState(false);
  const [disable, setDisable] = useState();
  const timerRef = useRef(null);

  const copyText = () => {
    navigator.clipboard.writeText(code);
    setCopy(true);
    setDisable(true);

    timerRef.current = setTimeout(() => {
      setCopy(false);
      setDisable(false);
      clearInterval(timerRef.current);
    }, 2000);
  };

  return (
    <OutputWrapper>
      <OutputHeader>
        <Title>HTML AND CSS</Title>
        <Actions>
          <ActionText
            disabled={disable}
            onClick={copyText}
          >
            {
              copy
                ? (<span>Copied!</span>)
                : 'Copy Code'
            }
          </ActionText>
          <ActionItem onClick={() => closeModal()}>
            <Icon>
              <IoMdClose />
            </Icon>
          </ActionItem>
        </Actions>
      </OutputHeader>
      <CodeWrapper>
        <Scrollbars
          renderThumbVertical={(props) => (
            <div
              {...props}
              className="custom-scrollbar-vertical"
            />
          )}
          renderThumbHorizontal={(props) => (
            <div
              {...props}
              className="custom-scrollbar-horizontal"
            />
          )}
        >
          <SyntaxHighlighter
            className="code"
            language="javascript"
            wrapLongLines
            wrapLines
            style={theme}
          >
            {code}
          </SyntaxHighlighter>
        </Scrollbars>
      </CodeWrapper>
    </OutputWrapper>
  );
};

export default OutputCode;
