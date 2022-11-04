import React, { Component } from 'react';
import {
  Form, Input, Button, Pagination, Row, Col,
} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { withStore } from '../../store';
import { withCookies, Cookies } from 'react-cookie';
import axios from 'axios';
import dayjs from 'dayjs';
import { withRouter } from 'next/router';
import Chats from './Chats';
import styles from './rooms.module.css';

const { TextArea } = Input;
const getUUID = () => { // UUID v4 generator in JavaScript (RFC4122 compliant)
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 3 | 8);
    return v.toString(16);
  });
}

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.socket = null;
    this.scrollView = null;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  scrollBottom = () => {
    const { scrollHeight, clientHeight } = this.scrollView;
    this.scrollView.scrollTop = scrollHeight - clientHeight;
  }

  async componentDidMount() {
    this.movePage(1)
    this.scrollBottom();
  }


  handleChange(e) {
    this.setState({ message: e.target.value });
  }

  sumitData = async ({ userUniqId, username, message, password }) => {
    try {
      if (message) {
        const { store } = this.props;
        const data = {
          user: username,
          uniq_id: userUniqId,
          message,
          room_name: store.state.metadata.id,
          update_dt: dayjs().format('YYYY-MM-DD HH:mm:ss'),
          password: password,
        };
        // dispatch message to other users
        const resp = await axios.post('/api/chat', data);
        // reset field if OK
        if (resp.status === 200) {
          this.movePage(1);
          this.form.resetFields();
        }
      }

      // focus after click
      // inputRef?.current?.focus();
    } catch (error) {
      console.log(error);
    }
  }

  async handleSubmit(form) {
    try {
      const { state } = this.props.store;
      let userUniqId = this.props.cookies.get('_WD_');
      if (!userUniqId) {
        this.props.cookies.set('_WD_', getUUID());
        userUniqId = this.props.cookies.get('_WD_');
      }
      this.sumitData({ ...form, userUniqId });
      this.form.resetFields();
    } catch (error) {
      console.log(error);
    }
  }

  renderInput = () => {
    const { state } = this.props.store;
    return (
      <Form
        ref={(r) => this.form = r}
        name="normal_login"
        className="login-form"
        initialValues={{ remember: false }}
        onFinish={this.handleSubmit}
      >
        <Row justify="center">
          <Col xs={{ span: 12 }}>
            <Form.Item
              name="username"
              rules={[{ required: true, message: '이름을 입력해 주세요.' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="이름" />
            </Form.Item>
          </Col>
          <Col xs={{ span: 11, offset: 1 }}>
            <Form.Item
              name="password"
              type="password"
              rules={[{ required: true, message: '비밀번호를 입력해 주세요.' }]}
            >
              <Input.Password placeholder="비밀번호" />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="center">
          <Col xs={{ span: 24 }}>
            <Form.Item
              name="message"
              rules={[{ required: true, message: '남기실 말을 입력해 주세요.' }]}
            >
              <TextArea
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="message"
                placeholder=""
              />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="center">
          <Col xs={{ span: 24 }}>
            <Form.Item>
              <Button htmlType="submit" block>등록하기</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }

  movePage = async (page = 1) => {
    try {
      const resp = await axios.get(`/api/chat?page=${page}`);
      this.props.store.actions.setChats(resp.data);
      this.props.store.actions.setCurrentPage(page);
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { chats, currentPage } = this.props.store.state;
    // if (chats) {
    return (
        <div style={{ padding: '1rem' }} className={styles.chat}>
          {this.renderInput()}
          <div
            ref={(r) => this.scrollView = r}
            style={{}}
          >
            {chats?.list?.map((el) => (
              <Chats
                styles={styles}
                chat={el}
                key={el.id}
                refresh={this.movePage}
              />
            ))}

            <div id='pagenation' style={{ margin: '1rem 0' }}>
              <Pagination pageSize={5} simple current={currentPage} onChange={this.movePage} total={chats?.totalCount} />
            </div>

          </div>
        </div>
    );
  }
}
export default withRouter(withCookies(withStore(Chat)));
