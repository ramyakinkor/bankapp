import React, { Component } from 'react';
import Banklist from '../../components/banklist/Banklist.component';
import './Banks.page.css';
import { Menu, Dropdown, Input, Button, Typography } from 'antd';

export default class Banks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bankdata: [],
      tempBankData: [],
      city: 'MUMBAI',
      text: 'ABHY006500',
      category: {
        title: 'IFSC',
        id: 'ifsc'
      },
      selectedRowKeys: [],
    }
  }

  menu = (
    <Menu selectable onClick={(e) => { this.updateCategory(e.item.props.children, e.key) }}>
      <Menu.Item key="ifsc">
        IFSC
        </Menu.Item>
      <Menu.Item key="branch">
        Branch
        </Menu.Item>
      <Menu.Item key="bank_name">
        Bank Name
        </Menu.Item>
    </Menu>
  );

  citymenu = (
    <Menu onClick={(e)=>{this.updateCity(e.item.props.children)}}>
      <Menu.Item key="0">
        MUMBAI
      </Menu.Item>
      <Menu.Item key="1">
        DELHI
      </Menu.Item>
      <Menu.Item key="3">
        KOLKATA
      </Menu.Item>
      <Menu.Item key="4">
        CHENNAI
      </Menu.Item>
      <Menu.Item key="5">
        BANGALORE
      </Menu.Item>
    </Menu>
  );

  columns = [
    {
      title: 'Bank',
      dataIndex: 'bank_name',
      key: 'bank_name',
    },
    {
      title: 'IFSC',
      dataIndex: 'ifsc',
      key: 'ifsc',
    },
    {
      title: 'Branch',
      dataIndex: 'branch',
      key: 'branch',
    },
    {
      title: 'Bank ID',
      dataIndex: 'bank_id',
      key: 'bank_id',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  componentDidMount() {
    this.apiCall(this.state.city);
  }

  apiCall = (city) => {
    fetch(`https://vast-shore-74260.herokuapp.com/banks?city=${city}`)
      .then(item => item.json())
      .then(item => this.setState({ bankdata: item.map(item => ({...item })), tempBankData: item.map(item => ({...item })) }));

  }

  checkTextInTable = (text) => {
    this.setState(
      {
        tempBankData: this.state.bankdata.filter(
          it => {
            return it[this.state.category.id]
              .toLowerCase()
              .includes(text.toLowerCase());
          }
        )
      })
  }

  updateCity = (cityName) => {
    this.apiCall(cityName);
    this.setState({ city: cityName });
  }

  updateCategory = (cat, key) => {
    this.setState({
      category: {
        title: cat,
        id:key
      }

    })
  }

  render() {

    const { Text } = Typography;

    return (
      <div>
           
        <div className="filterContainer">
        
        <div>
          <Dropdown overlay={this.citymenu} trigger={['click']}>
            <Button type="primary" size={'small'}>
              Select City
             </Button>
          </Dropdown>

        <Text code>City:</Text> <Text strong> {this.state.city} </Text>
        </div>
    
        <div>
            <Dropdown overlay={this.menu} trigger={['click']}>
            <Button type="primary" size={'small'}>
                Select Category
            </Button>
            </Dropdown> <Text code>Category:</Text> <Text strong>{this.state.category.title}</Text>
        </div>
        <div>
        <Input placeholder="Search" onChange={(e) => { this.checkTextInTable(e.target.value) }} />
        </div>
        
        </div>

        
        <Banklist bankTableData={this.state.tempBankData} bankTableColoumn={this.columns} selectedCity={this.state.city} updateCityFunc={this.updateCity} />
      </div>
    );
  }
}

