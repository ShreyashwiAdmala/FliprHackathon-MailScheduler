import React from "react";
import axios from "axios";
import BootstrapTable from 'react-bootstrap-table-next';
import { Redirect,BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class Futurelog extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			apiResponse: []
		};
	}

	
componentDidMount(){

        const url = 'http://localhost:5000/log';
        axios.post(url).then((response) => {

            //handle your login 
            
            const test=response.data;
            this.setState({apiResponse:test});
        }).catch((e) => {

            const test = e.data;
            this.setState({apiResponse:test});
            
        });

    }

  columns = [{
  dataField: 'to',
  text: 'To:'
}, {
  dataField: 'cc',
  text: 'CC:'
}, {
  dataField: 'time',
  text: 'Time Period'
}];

	render(){

		return(
			<div className="App">
			<nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/home"}>Mail Scheduler</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to={"/futurelog"}>History</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/history"}>Home</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      <div className="outer1">
        <div className="inner1">
        <h1>Mails Sent:</h1>
      <BootstrapTable keyField='id' data={ this.state.apiResponse } columns={ this.columns } />
			
			</div>
			</div>
			</div>
			);
	}

}
export default Futurelog;