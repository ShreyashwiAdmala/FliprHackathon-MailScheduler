import React from "react";
import axios from "axios";
import { Redirect,BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

            To: '',
            CC: '',
            Subject:'',
            TimePeriod:'',
            EmailBody:'',
            showHome1: false
        };
      
}

handleInputChange = (e) => {

        this.setState({

            [e.target.name]: e.target.value

        });
    }

    handleSubmit = (e) => {

        e.preventDefault();

        const url = 'http://localhost:5000/sendMail';

        const user = {

            To: this.state.To, 
            CC: this.state.CC,
            Sub:this.state.Subject,
            Time:this.state.TimePeriod,
            emailbody:this.state.EmailBody
        }
        
        axios.post(url, user).then((response) => {

            //handle your login 
            const test=response.data;
            this.setState({showHome1:true});
        


        }).catch((e) => {

            //handle your errors
        });

    }
render(){
    if(this.state.showHome1)
    {    return  <Redirect to="/history" />
    } 
  return(
      <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/home"}>Mail Scheduler</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to={"/futurelog" } >History</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/history"}>Home</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      <div className="outer">
        <div className="inner">
  <h3>Send mail</h3>
<div>
<form >
  <div className="form-group">
    <label htmlFor="To">TO </label>
    <input name="To" type="email" className="form-control" placeholder="To" onChange={this.handleInputChange}/>
  </div>
  <div className = "form-group"> 
  <label htmlFor="CC">CC </label>
    <input name="CC" type="email" className="form-control" placeholder="CC" onChange={this.handleInputChange}/>
  </div>
  <div className = "form-group">
  <label htmlFor="Subject">Subject: </label>
    <input name="Subject" type="text" className="form-control" placeholder="Subject" onChange={this.handleInputChange}/>
  </div>
  <div className = "form-group" >
    <label htmlFor="Time Period">Time Period: </label>
    <select name = "TimePeriod" className="form-control" onChange={this.handleInputChange}>
    <option>Time Period</option>
    <option>Recurring Schedule</option>
    <option>Weekly Schedule</option>
    <option>Monthly Schedule</option>
    <option>Yearly Schedule</option>
  </select></div>
   <div className = "form-group">
    <label htmlFor="Mail Body">Mail Body: </label>
    <input type="text" name="EmailBody" className="form-control" placeholder="MailBody" onChange={this.handleInputChange}/>
   </div>
    <div className="footer">
          <button type="button" className="btn btn-dark btn-lg btn-block" onClick={this.handleSubmit}>
            Send Mail
          </button>
        </div>
</form>
</div>
</div>
</div>
</div>

    );
}
}

export default Home;
