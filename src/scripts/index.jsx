import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import EmployessContainer from './components/employees/Employees.component';


ReactDOM.render(
	<Router>
		<Route path="/" component={EmployessContainer}/>
		{/*<Route path="*" component={NotFound}/>*/}
	</Router>
	, document.getElementById('content'));