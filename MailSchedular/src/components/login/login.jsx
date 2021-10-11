import React from "react";
import loginImg from "../../login.svg";
import axios from "axios";
import  Home from "../Home/Home.jsx";
import { Redirect,BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

export class Login extends React.Component {

constructor(props) {

        super(props);

        this.state = {

            username: '',
            password: '',
            showHome:false,
            showLogin: false,
            showloginButton:true,
            showlogoutButton:false
        };
    }

     clientId = "186747368857-vni4k4o218pffb4h42550mqt0npdsafi.apps.googleusercontent.com";
      
onLoginFailure = (res) => {
        console.log('Login Failed:', res);
        
    };
onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        this.setState({showloginButton:true, showlogoutButton:false});
    };
onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        this.setState({showloginButton:false, showlogoutButton:true,showHome:true});
    };

    handleInputChange = (e) => {

        this.setState({

            [e.target.name]: e.target.value

        });
    }

    handleSubmit = (e) => {

        e.preventDefault();

        const url = 'http://localhost:5000/login';

        const user = {

            username: this.state.username, 
            password: this.state.password
        }

        axios.post(url, user).then((response) => {

            //handle your login 
            
            const test=response.data;
            this.setState({showHome:true});
        
        


        }).catch((e) => {

            const test = e.data;
            this.setState({apiResponse:test});

            
        });

    }

  render() {
    if(this.state.showHome)
    {
        return  <Redirect to="/home" />
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
      <form>
      
        <h3>Sign In</h3>
        <div className="content">

          <div className="form">
            <div className="form-group">
            <p>{this.state.apiResponse}</p>

              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" name="username" placeholder="username" onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" name="password" placeholder="password" onChange={this.handleInputChange} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn btn-dark btn-lg btn-block" onClick={this.handleSubmit}>
            Sign In
          </button>
        </div>
        { this.state.showloginButton ?
                <GoogleLogin
                    clientId={this.clientId}
                    buttonText="Sign In"
                    onSuccess={this.onLoginSuccess}
                    onFailure={this.onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { this.state.showlogoutButton ?
                <GoogleLogout
                    clientId={this.clientId}
                     buttonText="Sign Out"
                    onLogoutSuccess={this.onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
      </form>
      </div>
      </div>
      <div>
            
        </div>
      </div>

      
    );}

    /*handleLogin: function() {
    console.log("EMail: " + this.state.email);
    console.log("Password: " + this.state.password);
  }*/
}

export default Login;
  



