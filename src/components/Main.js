import React from 'react';
import Image from 'next/image';
import { Typography } from 'antd';
const { Title } = Typography;
import { WeddingGallery } from "./WeddingGallery";
import { Account } from "./Account";
import Map from './Map'
import Chat from './Chat'
import LineTitle from './LineTitle';
import dayjs from 'dayjs';
import { withStore } from '../store'
import Nobel from './Nobel';
import styles from './main.module.css';

const Main = (props) => {
  const { metadata } = props.store.state;
  const call = (type, who) => {
    let href = ''
    if (type === 'tel') {
      href = 'tel:'
    }

    if (type === 'sms') {
      href = 'sms:'
    }



    if (who === 'boy') {
      href += '01030072436'
    }

    if (who === 'girl') {
      href += '01079136446'
    }

    location.href = href

  }
  if (metadata) {
    const date = dayjs(metadata.date)
    return (
      <div >
        <div style={{ padding: '5.313rem 0' }}>
          <p style={{ textAlign: 'center' }}>
            <span className={styles.boy_name}>{metadata?.boy_name}</span>
            <span className={styles.girl_name}>{metadata?.girl_name}</span>
          </p>
        </div>


        <div style={{ margin: '1rem' }}>
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
            }}>2022년 6월 5일 일요일 오후 2시</span>
            <div></div>
          </p>
        </div>
        <div>
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
            }}>선릉 포스코센터 4층 아트홀</span>
          </p>
        </div>

        <div>
          <div> </div>

        </div>
        {/* 
        <div style={{ padding: '0 0' }}>
          <p style={{ textAlign: 'center' }}>
            <span className={styles.boy_name}>결혼합니다</span>
          </p>
        </div> */}


        <div style={{ padding: '5.313rem 0', display: 'flex', justifyContent: 'center' }}>
          <img src={'/images/wedding/list/list_5.jpg'} style={{ width: '15rem' }} />
        </div>

        <LineTitle>
          초 대 합 니 다
        </LineTitle>


        <div>
          <Nobel>
            <p style={{ fontFamily: 'KoPub Batang', }}>새로운 마음과 새 의미를 간직하며</p>
            <p style={{ fontFamily: 'KoPub Batang', }}>저희 두 사람이 새 출발의 첫걸음을 내딛습니다.</p>
            <p style={{ fontFamily: 'KoPub Batang', }}>좋은 꿈, 바른 뜻으로 올바르게 살 수 있도록</p>
            <p style={{ fontFamily: 'KoPub Batang', }}>축복과 격려 주시면</p>
            <p style={{ fontFamily: 'KoPub Batang', }}>더없는 기쁨으로 간직하겠습니다.</p>
          </Nobel>
        </div>


        <div style={{ margin: '6.125rem 0' }}>
          <div className={styles.honju}>
            <span className={styles.dad_name}>{metadata?.boy_dad_name}</span>
            <span className={styles.dot} />
            <span className={styles.mom_name}>{metadata?.boy_mom_name}</span>
            <span className={styles.default} style={{ fontSize: '0.8rem' }}>의 장남</span>
            <span className={styles.short_name}>{metadata?.boy_name?.substring(1, metadata?.boy_name?.length)}</span>
          </div>
          <div className={styles.honju}>
            <span className={styles.dad_name}>{metadata?.girl_dad_name}</span>
            <span className={styles.dot} />
            <span className={styles.mom_name}>{metadata?.girl_mom_name}</span>
            <span className={styles.default} style={{ fontSize: '0.8rem' }}>의 장녀</span>
            <span className={styles.short_name}>{metadata?.girl_name?.substring(1, metadata?.girl_name?.length)}</span>
          </div>
        </div>



        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 100 }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
            <div style={{
              marginRight: 10,
              fontFamily: "Noto Sans KR",
              fontSize: '0.875rem',
              fontWeight: 400,
              lineHeight: '2.250rem',
              color: '#111',
            }}>신랑에게 연락하기</div>
            <div onClick={() => call('tel', 'boy')} style={{ marginRight: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#78c0e9', width: '2.25rem', height: '2.25rem', borderRadius: '50%' }}>
              <img src="/images/icon_tel.png" style={{ width: '1rem', height: 'auto' }} />
            </div>
            <div onClick={() => call('sms', 'boy')} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ddd', width: '2.25rem', height: '2.25rem', borderRadius: '50%' }}>
              <img src="/images/icon_sms.png" style={{ width: '1rem', height: 'auto' }} />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <div style={{
              marginRight: 10,
              fontFamily: "Noto Sans KR",
              fontSize: '0.875rem',
              fontWeight: 400,
              lineHeight: '2.250rem',
              color: '#111',
            }}>신부에게 연락하기</div>
            <div onClick={() => call('tel', 'girl')} style={{ marginRight: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f79e9e', width: '2.25rem', height: '2.25rem', borderRadius: '50%' }}>
              <img src="/images/icon_tel.png" style={{ width: '1rem', height: 'auto' }} />
            </div>
            <div onClick={() => call('sms', 'girl')} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ddd', width: '2.25rem', height: '2.25rem', borderRadius: '50%' }}>
              <img src="/images/icon_sms.png" style={{ width: '1rem', height: 'auto' }} />
            </div>
          </div>
        </div>

        <LineTitle>
          행 복 한 날 들
        </LineTitle>
        <div style={{ width: '100%', marginBottom: 100 }}>
          <WeddingGallery
            images={[
              '/images/wedding/list/list_1.jpg',
              '/images/wedding/list/list_2.jpg',
              '/images/wedding/list/list_3.jpg',
              '/images/wedding/list/list_4.jpg',
              '/images/wedding/list/list_5.jpg',
              '/images/wedding/list/list_6.jpg',
              '/images/wedding/list/list_7.jpg',
              '/images/wedding/list/list_8.jpg',
              '/images/wedding/list/list_9.jpg',
              '/images/wedding/list/list_10.jpg',
              '/images/wedding/list/list_11.jpg',
              '/images/wedding/list/list_12.jpg',
            ]} />
        </div>

        <LineTitle>
          마 음 전 하 기
        </LineTitle>
        <Account />

        <LineTitle>
          함 께 가 는 길
        </LineTitle>
        <Map />


        <LineTitle>
          응 원 한 마 디
        </LineTitle>

        <Chat />
      </div >
    );
  }
  return null;
}

export default withStore(Main);
