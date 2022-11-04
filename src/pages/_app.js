import React, { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import Script from 'next/script'
import { CookiesProvider } from 'react-cookie';
import { Store } from '../store';
import Header from '../components/Header';
import '../styles/global.css';
import 'antd/dist/antd.css';
import dayjs from 'dayjs'
var utc = require('dayjs/plugin/utc') // dependent on utc plugin
var timezone = require('dayjs/plugin/timezone')
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault("Asia/Seoul")

function MyApp(props) {
  const { Component, pageProps } = props;
  return (
    <Store>
      <Header />
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
      <Script src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=1ivdt3pmj2" />
      <Script src="https://developers.kakao.com/sdk/js/kakao.min.js" />
    </Store>
  );
}

export default MyApp;
