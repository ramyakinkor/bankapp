import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import  './Home.page.css';
import Banks from '../banks/Banks.page';

const { Header, Content, Sider } = Layout;



    
export default class Home extends Component {

    state = {
        collapsed: false,
      };
    
      onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <span>Banks</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Banks />
            </div>
          </Content>
        </Layout>
      </Layout>
        );
    }
}

