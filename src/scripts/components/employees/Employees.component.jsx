import React, {Component} from 'react';

import NavBar from '../../components/navbar/Navbar.component';
import EmployeesList from '../../components/employees/EmployeesList.component';

import mainStyle from '../../main.scss';


export default class EmployessContainer extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<NavBar />
					<EmployeesList />
				</div>
			</div>
		);
	}
}