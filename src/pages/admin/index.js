import React from "react";
import { withStore } from "../../store";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import { Tabs } from "antd";
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

import Bank from '../../components/admin/Bank';
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

  componentDidMount = () => {};

  render() {
    return (
      <Layout style={{ backgroundColor: "#fff", padding: 40 }}>
        <Tabs defaultActiveKey="2">
          <TabPane
            tab={
              <span>
                <AppleOutlined />
                Bank
              </span>
            }
            key="1"
          >
            <Bank></Bank>
          </TabPane>
          <TabPane
            tab={
              <span>
                <AndroidOutlined />
                Tab 2
              </span>
            }
            key="2"
          >
            Tab 2
          </TabPane>
        </Tabs>
      </Layout>
    );
  }
}

export default withStore(AdminPage);
