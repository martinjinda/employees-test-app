import React, {Component} from 'react';

import navBarStyle from './navbar.scss';


export default class NavBar extends React.Component {
	render() {
		return (
			<div className="header clearfix">
				<nav>
					<ul className="nav nav-pills pull-right">
						<li role="presentation">
							<a data-toggle="modal" data-target=".addEmployeeForm" href="#">
								<span className="glyphicon glyphicon-plus"></span>
								Add Employee
							</a>
						</li>
					</ul>
				</nav>
				<h1 className="h3 text-muted">Corporate Employees</h1>
			</div>
		);
	}
}