import React, { useContext } from 'react';
import dayjs from 'dayjs';
import { withContext } from '../lib/withContext'
export const Context = React.createContext('commonStore');
export const withStore = withContext(Context, 'store');
export const useStore = () => useContext(Context);

export class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      metadata: {
        id: 'seokhwan',
        date: dayjs('2022-06-05 14:00:00'),
        location: '선릉 포스코센터',
        geo: '37.50652836200622, 127.0563039730153',
        contents: '상세내용입니다. 잘살게요',
        boy_name: '원석환',
        boy_bank: '카카오뱅크 3333042701706',
        boy_tel: '010-3007-2436',
        boy_dad_name: '원허식',
        boy_mom_name: '권점자',
        boy_dad_tel: '010-',
        boy_mom_tel: '010-3059-1130',
        girl_name: '김라연',
        girl_bank: '카카오 김라연',
        girl_tel: '010-7913-6446',
        girl_dad_name: '김종환',
        girl_mom_name: '이옥희',
        girl_dad_tel: '010-',
        girl_mom_tel: '010-'
      },
      chats: [],
      currentPage: 1,
    };
  }

  actions = () => ({
    setMetadata: (metadata) => {
      this.setState({ metadata });
    },
    setChats: (chats) => {
      this.setState({ chats });
    },
    login: (user) => {
      this.setState({ user });
    },
    setCurrentPage: (page) => {
      this.setState({ currentPage: page });
    }
  })

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          actions: this.actions(),
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
