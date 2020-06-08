// src/components/Home.js

import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    let displayContent;
    console.log(this.props.isLogIn);
    if(this.props.isLogIn){
        displayContent = (
            <>
                <Link to="/userProfile">User Profile</Link>
                <br/>
                <Link to="/debit">Debit</Link>
                <AccountBalance accountBalance={this.props.accountBalance}/>
            </>
         );
    }else{
         displayContent = (<> <Link to="/logIn">Log In</Link></>);
    };

    return (
        <>
        <div>
          <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
          <h1>Bank of React</h1>
          {displayContent}
        </div>
        </>
    );
  }
}

export default Home;