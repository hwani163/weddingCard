import React from 'react';
import Head from 'next/head';
import { useStore } from '../store';
const Header = (props) => {
  const { state } = useStore();
  const { metadata } = state;
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="Content-Script-Type" content="text/javascript" />
      <meta httpEquiv="Content-Style-Type" content="text/css" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.5, user-scalable=yes"
      />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>π§ββοΈπ§ββοΈ</text></svg>" />
      <link href="https://fonts.googleapis.com/earlyaccess/kopubbatang.css" rel="stylesheet" />
      <meta
        name="description"
        content="μμν γ» κΉλΌμ°μ κ²°νΌμμ μ΄λν©λλ€."
      />
      <meta
        name="Location"
        content="μμΈμ κ°λ¨κ΅¬"
      />
      <meta name="Reply-To" content="am400000@gmail.com" />
      <meta
        property="og:url"
        content="https://wedding-sh.herokuapp.com/"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="μμν γ» κΉλΌμ°μ κ²°νΌμμ μ΄λν©λλ€."
      />
      <meta property="og:description" content="2022-06-05 μΌμμΌ μ€ν 2μ" />
      <meta
        property="og:image"
        content="/images/wedding_thumbnail.jpg"
      />
      <meta name="theme-color" content="#fff" />
      <meta name="msapplication-navbutton-color" content="#fff" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#fff" />
    </Head>
  );
}

export default Header;
