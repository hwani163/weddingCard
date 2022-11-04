import React, { Component } from 'react';
import dayjs from 'dayjs';
import { Comment, Tooltip, Avatar, Modal, Input } from 'antd';
import axios from 'axios';
import { DeleteOutlined } from '@ant-design/icons';
import { AvatarGenerator } from 'random-avatar-generator';
const relativeTime = require('dayjs/plugin/relativeTime');
const generator = new AvatarGenerator();
dayjs.extend(relativeTime);

class Chats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteModal: false,
      deleteLoading: false,
      inputPassword: '',
    };
  }

  delete = async () => {
    try {
      const { chat } = this.props;
      this.setState({ deleteLoading: true })
      const resp = await axios.delete('/api/chat', {
        data: {
          id: chat.id,
          password: this.state.inputPassword,
        },
      });
      // reset field if OK
      if (resp.data.success) {
        this.setState({
          deleteModal: false,
          deleteLoading: false,
          inputPassword: '',
        }, () => {
          alert('삭제가 완료되었습니다.')
          this.props.refresh();
        });


      } else {
        alert(resp.data.message);
      }
      this.setState({ deleteLoading: false })
    } catch (error) {
      this.setState({ deleteLoading: false })
    }

  }

  render() {
    const {
      chat,
    } = this.props;
    const avatar = generator.generateRandomAvatar(chat.uniq_id);;
    return (
      <>
        <Modal
          // title="Title"
          visible={this.state.deleteModal}
          onOk={this.delete}
          confirmLoading={this.state.deleteLoading}
          onCancel={() => this.setState({ deleteModal: false })}
        >
          <p>비밀번호를 입력해주세요.</p>
          <Input.Password placeholder="비밀번호" onChange={(e) => this.setState({ inputPassword: e.target.value })} />

        </Modal>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', }}>
          <Comment
            style={{ width: '100%' }}
            author={<span style={{ fontSize: '0.813rem', color: 'black' }}>{chat.user}</span>}
            // avatar={<Avatar src={avatar} />}
            content={(
              <div style={{ padding: '0.2rem 0' }}>
                <p style={{ textAlign: 'left', color: '#777', fontSize: '0.750rem' }}>
                  {chat.message}
                </p>
              </div>
            )}
            // datetime={(
            //   <Tooltip style={{ color: '#777', fontSize: '0.688rem' }} title={dayjs(chat.update_dt).subtract(9, 'hour').format('YYYY.MM.DD HH:mm:ss')}>
            //     <span>{dayjs(chat.update_dt).subtract(9, 'hour').fromNow()}</span>
            //   </Tooltip>
            // )}
          />
          <DeleteOutlined style={{ padding: 16 }} onClick={() => this.setState({ deleteModal: true })} />
        </div>
      </>
    );
  }
}
export default Chats;
