import React, {Component} from 'react';
import axios from "axios";
import {Link,Redirect} from 'react-router-dom';

class Debit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allDebits: [],
      debit:{
        description: "",
        amount: 0,
        date: ""
      }
    };
  }
  componentDidMount =() =>{
    axios
      .get("https://moj-api.herokuapp.com/debits")
      .then((response) => {
        const data = response.data;
        for(let i = 0; i < data.length; i++){
          this.setState({debit: data[i]});
          this.setState({ allDebits: [...this.state.allDebits, this.state.debit]});
        }
        console.log(this.state.debit)
      })
      .catch((err) => {
        console.log("error");
      });
  }

  render(){
    let display = (
      <div>
        {this.state.allDebits.map((debit) => (
          <ul>
            <li>Dscription: {debit.description}</li>
            <li>Amount: {debit.amount}</li>
            <li>Date: {debit.date}</li>
          </ul>
        ))}
      </div>
    );

    return (
        <div>
          <h3>Debit</h3>
          <>{display}</>
        </div>
    );
  }
}

export default Debit;