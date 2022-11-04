import React, { useState } from 'react';
const Noble = (props) => {
  return (
    <>
      <div style={{  }}>
        <p style={{ textAlign: 'center' }}>
          <span style={{
            marginLeft: '0.375rem',
            width: '1.25rem',
            fontFamily: '"KoPub Batang"',
            fontSize: '0.875rem',
            fontWeight: '400',
            lineHeight: '1.5rem',
            textAlign: 'center',
            textTransform: 'uppercase',
            color: '#000',
          }}>{props.children}</span>
        </p>
      </div>
    </>
  )
}
export default Noble;