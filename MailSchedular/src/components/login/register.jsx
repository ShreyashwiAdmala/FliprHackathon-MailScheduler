import React from "react";
import loginImg from "../../login.svg";
import axios from "axios";
import { Redirect,BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

            username: '',
            password: ''
        };
  }

  handleInputChange = (e) => {

        this.setState({

            [e.target.name]: e.target.value

        });
    }

    handleSubmit = (e) => {

        e.preventDefault();

        const url = 'http://localhost:5000/register';

        const user = {

            uname: this.state.username, 
            pass: this.state.password,
            email: this.state.email
        }

        axios.post(url, user).then((response) => {

            //handle your login 
            const test=response.data;
            this.setState({apiResponse:test,redirect:true});
            this.props.onRegister();
        }).catch((e) => {

            //handle your errors
        });

    }


  render() {
    if(this.state.redirect)
    {

     return  <Redirect to="/sign-in" />
    }
    return (
      <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Mail Scheduler</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign In</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="outer">
        <div className="inner">
      <div >
        <h3>Sign Up</h3>
        <div className="content">
          
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" className="form-control" onChange={this.handleInputChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" className="form-control" onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" className="form-control" onChange={this.handleInputChange} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn btn-dark btn-lg btn-block" onClick={this.handleSubmit}>
            Sign Up
          </button>
        </div>
        <p className="App-intro">{this.state.apiResponse}</p>
      </div>
      </div>
       </div>
        </div>
    );
  }
}
