import React, { useState } from 'react';
import { Comment, Tooltip, Avatar, Modal, Button } from 'antd';
import styles from './main.module.css';
import { Input, Space } from 'antd';
export const Account = () => {
  const [modal, openModal] = useState('');
  const accountData = {
    boy: [
      {
        index: 1,
        bank: '국민은행',
        address: '710402-00-067478',
        name: '원석환',
      },
      {
        index: 2,
        bank: '국민은행',
        address: '606-21-0501-161',
        name: '원허식',
      }
    ],
    girl: [
      {
        index: 1,
        bank: 'SC 제일은행',
        address: '382-20-151407',
        name: '김라연',
      },
      {
        index: 2,
        bank: '우리은행',
        address: '1002-050-029862',
        name: '이옥희',
      }
    ]
  }
  const copy = (item) => {
    // 흐음 1.
    if (navigator.clipboard) {
      // (IE는 사용 못하고, 크롬은 66버전 이상일때 사용 가능합니다.)
      navigator.clipboard
        .writeText(item.address.replace(/-/g, ''))
        .then(() => {
          Modal.success({
            title: '계좌번호가 복사되었습니다',
            content: (
              <div>
                <div>
                  {item.bank} {item.address}
                </div>
                <div>
                  예금주 {item.name}
                </div>
              </div>
            ),
            onOk() {
              openModal('')
            },
          })
        })
        .catch((e) => {
          console.log(e)
          alert("복사를 다시 시도해주세요.");
        });
    } else {
      // 흐름 2.
      if (!document.queryCommandSupported("copy")) {
        return alert("복사하기가 지원되지 않는 브라우저입니다.");
      }

      // 흐름 3.
      const textarea = document.createElement("textarea");
      textarea.value = item.address.replace(/-/g, '');
      textarea.style.top = 0;
      textarea.style.left = 0;
      textarea.style.position = "fixed";

      // 흐름 4.
      document.body.appendChild(textarea);
      // focus() -> 사파리 브라우저 서포팅
      textarea.focus();
      // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
      textarea.select();
      // 흐름 5.
      document.execCommand("copy");
      // 흐름 6.
      document.body.removeChild(textarea);
      Modal.success({
        title: '계좌번호가 복사되었습니다',
        content: (
          <div>
            <div>
              {item.bank} {item.address}
            </div>
            <div>
              예금주 {item.name}
            </div>
          </div>
        ),
        onOk() {
          openModal('')
        },
      })
    }
  }
  return (
    <>
      <div className={styles.accountModal}>
        <Modal
          title={modal === 'boy' ? `신랑측 계좌번호` : `신부측 계좌번호`}
          visible={modal}
          onCancel={() => openModal('')}
          footer={[
            <Button key="back" onClick={() => openModal('')}>
              확인
            </Button>,
          ]}
        >
          <div>
            {
              accountData[modal]?.map((item, idx) => {
                return (
                  <div key={idx}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: idx != 0 ? '1rem' : '' }}>
                      <span>{item.bank}</span>
                      <span>예금주 : {item.name}</span>
                    </div>

                    <Input.Group style={{ marginTop: 7 }}>
                      <Input disabled style={{ width: 'calc(100% - 60px)', color: 'black', backgroundColor: 'white' }} value={item.address} />
                      <Button type="primary" onClick={() => copy(item)}> 복사</Button>
                    </Input.Group>
                  </div>
                )
              })
            }
          </div>
        </Modal>
      </div >

      <div style={{ padding: '2rem' }}>
        <div className={styles.row} style={{ width: '100%' }}>
          <div className={styles.heart}>신랑측 마음</div>
          <div className={styles.account_btn} onClick={() => openModal('boy')} style={{ cursor: 'pointer', backgroundColor: '#78c0e9' }}>계좌번호 보기</div>
        </div>

        <div className={styles.row} style={{ width: '100%', marginTop: '1.25rem' }}>
          <div className={styles.heart}>신부측 마음</div>
          <div className={styles.account_btn} onClick={() => openModal('girl')} style={{ cursor: 'pointer', backgroundColor: '#f79e9e' }}>계좌번호 보기</div>
        </div>
      </div>
    </>

  )
}