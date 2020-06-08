import React, {Component} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {Home,UserProfile,LogIn,Debit} from "./components";
    
class App extends Component {

  constructor(){
    super();
    this.state = {
      showHomePage: true,
      isLogIn: false,
      isModify: false,
      credit: 0,
      debit: 0,  
      accountBalance: 0,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      }
    }
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser, isLogIn: true})
  };


  render() {
    if(this.state.isLogIn&&this.state.isModify){
      this.setState({accountBalance: this.state.credit - this.state.debit});
    }
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} isLogIn={this.state.isLogIn}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} accountBalance={this.state.accountBalance} />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>);
    const DebitComponent = () => (<Debit/>);

    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/debit" render={DebitComponent}/>
          </div>
        </Router>
    );
  }

}
    
export default App;