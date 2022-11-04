import React from 'react';
import axios from 'axios';
import NotFound from './404';
import { withStore } from '../store';
import Main from '../components/Main';
import { withRouter } from 'next/router'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'

dayjs.locale('ko')
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount = async () => {
  //   try {
  //     const result = await axios.get('/api/metadata/seokhwan');
  //     this.props.store.actions.setMetadata({
  //       photoList: result?.data?.photo_list,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  render() {
    if (this.props.store.state.metadata) {
      return (
        <Main />
      );
    }
    return <NotFound />;

  }
}

export default withRouter(withStore(Home));
