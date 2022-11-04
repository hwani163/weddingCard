import React, { useState } from 'react';
const LineTitle = (props) => {
  return (
    <>
      <div style={{  margin: '1rem' }}>
        <p style={{ textAlign: 'center' }}>
          <span style={{
            marginLeft: '0.375rem',
            width: '1.25rem',
            fontFamily: '"KoPub Batang"',
            fontSize: '1rem',
            fontWeight: '400',
            lineHeight: '1.5rem',
            textAlign: 'center',
            textTransform: 'uppercase',
            color: '#000',
          }}>{props.children}</span>
        </p>
        <div style={{ marginTop:20,height: 1, width: '100%', backgroundColor: 'black' }} />
      </div>
    </>
  )
}
export default LineTitle;