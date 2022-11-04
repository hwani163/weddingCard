import React, { useState } from 'react';
import { Image, Button } from 'antd';

const ImageItem = (props) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div
        onClick={() => setVisible(true)}
        style={{
          backgroundImage: `url(${props.src})`,
          display: 'block',
          paddingBottom: '100%',
          backgroundPosition: '50% 50%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }} />
      <Image
        width={10}
        style={{ display: 'none' }}
        src={props.src}
        preview={{
          visible,
          src: props.src,
          onVisibleChange: value => {
            setVisible(value);
          },
        }}
      />
    </>
  );
}


export const WeddingGallery = (props) => {
  if (Array.isArray(props.images)) {
    return (
      <div style={{ width: '100%', height: '100%', display: 'flex', flex: 1 }}>
        <ul style={{ padding: '0 1rem', width: '100%' }}>
          {props.images.map(src => {
            return (<li key={src} style={{
              float: 'left',
              width: '33.333%',
              padding: '0.125rem 0.063rem 0',
              boxSizing: 'border-box',
            }}>
              <ImageItem src={src} />
            </li>
            )
          })}
        </ul>
      </div>
    );
  }
  return null;
}