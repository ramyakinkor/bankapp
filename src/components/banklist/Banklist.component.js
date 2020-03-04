import React, { Component } from 'react';
import { Table, Dropdown, Menu} from 'antd';
import  './Banklist.component.css';
import {withRouter} from 'react-router-dom';
    
class Banklist extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
        <div>
              
              
               <div >
                   {this.props.bankTableData && this.props.bankTableData.length>0 &&  <Table dataSource={this.props.bankTableData} columns={this.props.bankTableColoumn} onRow={(record) => {
                        return {
                            onClick: event => { event.preventDefault(); this.props.history.push({pathname:`/bankdetails`, state: { detail:record }})  }, // click row
                        };
                    }} />}
                    {this.props.bankTableData && this.props.bankTableData.length === 0 && <div>Loading ...</div>}
                </div>
        </div>
        );
    }
}

export default withRouter(Banklist);
