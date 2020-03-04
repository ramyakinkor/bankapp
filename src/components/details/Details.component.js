import React, { Component } from 'react';
import  './Details.component.css';
import { withRouter } from 'react-router-dom';
import { Card, Button, Typography } from 'antd';
    
class Details extends Component {

    constructor(props){
        super(props);
    }
    
    render() {

        const { Text } = Typography;

        return (
        <div className="detailsContainer">
            
                <Card title="Bank Details" bordered={false} style={{ width: 300 }}>
                    <p> <Text strong> Bank Name: </Text>  { this.props.location.state.detail.bank_name} </p>
                    <p><Text strong> IFSC: </Text> { this.props.location.state.detail.ifsc} </p>
                    <p> <Text strong>Bank ID:</Text> {this.props.location.state.detail.bank_id} </p>
                    <p> <Text strong>Branch:</Text> {this.props.location.state.detail.branch} </p>
                    <p> <Text strong>Bank Address:</Text> {this.props.location.state.detail.address} </p>
                    <Button type="primary" className="backButton" onClick={()=> {this.props.history.push({pathname:`/`})}}>Back</Button>
                </Card>
                        
        
        </div>
        );
    }
}

export default withRouter(Details);
