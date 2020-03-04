import React from 'react';
import './App.css';
import BankDetails from './pages/bankdetails/Bankdetails.page';
import Home from './pages/home/Home.page';
import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/bankdetails" component={BankDetails} />
      </BrowserRouter>
    );
  }
  
}

export default App;
