import React from 'react';
import axios from 'axios';
import NotFound from '../../404';
import { withStore } from '../../../store';
import Admin from '../../../components/Admin';
import Header from '../../../components/Header';

// export async function getServerSideProps(context) {
//   const { id } = context?.query;
//   const { host } = context.req.headers;
//   try {
//     const result = await axios.get(`http://${host}/api/metadata/${id}`);
//     return {
//       props: {
//         metadata: result.data,
//         host,
//       },
//     };
//   } catch (error) {
//     return { props: {} };
//   }
// }

class AdminPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {

  }

  render() {
    return (
      <Admin host={this.props.host} metadata={this.props.metadata} />
    );
  }
}

export default withStore(AdminPage);
