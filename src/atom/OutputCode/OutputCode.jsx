import React, { useRef, useState } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import htmlbars from 'react-syntax-highlighter/dist/esm/languages/hljs/htmlbars';
import { IoMdClose } from 'react-icons/io';
import {
  OutputWrapper, CodeWrapper, OutputHeader, Title,
  Actions, ActionItem, Icon, ActionText,
} from './OutputCode.style';
import theme from './Theme';

SyntaxHighlighter.registerLanguage('htmlbars', htmlbars);

const outputText = `
<style>
:root {
  --base:              #f7392b;
  --bg-blend:          multiply;
  --blur:              0px;
  --fg-blend:          lighten;
  --foreground:        #16006f;
  --imageOpacity:      1;
  --spacing:           1%;
}
.img-wrapper {
  background-color:    var(--base);
  display:             flex;
  flex:                1 1 100%;
  height:              100%;
  overflow:            hidden;
  padding:             var(--spacing);
  position:            relative;
}

.img-wrapper img {
  filter:              grayscale(100%) contrast(1) blur(var(--blur));
  flex:                1 0 100%;
  height:              100%;
  max-width:           100%;
  mix-blend-mode:      var(--bg-blend);
  object-fit:          cover;
  opacity:             var(--opacity);
  position:            relative;
  width:               100%;
}

.img-wrapper::before {
  background-color:    var(--foreground);
  bottom:              0;
  content:             '';
  height:              100%;
  left:                0;
  mix-blend-mode:      var(--fg-blend);
  position:            absolute;
  right:               0;
  top:                 0;
  width:               100%;
  z-index:             1;
}
</style>

<div class="img-wrapper">
  <img src="https://i.picsum.photos/id/909/1000/1000.jpg?hmac=T0MYWfd-SSLGde6AsH2xwYUwegZvLu3d_Veri7vxnRs">
</div>
`;

const OutputCode = ({ closeModal }) => {
  const [copy, setCopy] = useState(false);
  const [disable, setDisable] = useState();
  const timerRef = useRef(null);

  const copyText = () => {
    navigator.clipboard.writeText(window.location.href);
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
            {outputText}
          </SyntaxHighlighter>
        </Scrollbars>
      </CodeWrapper>
    </OutputWrapper>
  );
};

export default OutputCode;
