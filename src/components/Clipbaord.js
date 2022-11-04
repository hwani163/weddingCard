import React, { useState } from 'react';
import { Icon, Popup } from "semantic-ui-react";

export const Clipboard = ({ stringToCopy = "" }) => {
  const [messageVisible, setMessageVisible] = useState(false);

  const onClickClipboard = () => {
    setMessageVisible(true);
    setTimeout(() => {
      setMessageVisible(false);
    }, 650);
  }

  return (
    <>
      <Popup
        position={'top center'}
        open={messageVisible}
        content={'복사되었습니다'}
        style={{
          backgroundColor: '#f8ffff',
          color: '#276f76',
          boxShadow: '0 0 0 1px #a9d5de inset, 0 0 0 0 transparent',
          transition: 'opacity 1s linear'
        }}
        trigger={
          <button style={{ border: 'transparent', backgroundColor: 'transparent' }} className={'btn'}
            onClick={onClickClipboard}
            data-clipboard-text={stringToCopy}
          >
            <Icon name={'clipboard outline'} />
          </button>}
      />
    </>
  )
}