import React, {Component} from 'react';
import Reactable from 'reactable';

import 'datatables.net-bs';
import 'datatables.net-bs/css/dataTables.bootstrap.css';

import AddEmployeeModal from '../../components/addEmployee/AddEmployee.component';
import Graphs from '../../components/graphs/graphs.component';

var Table = Reactable.Table;


export default class EmployeesList extends React.Component {

	componentDidMount() {
		$('.table').dataTable({
			scrollY: '450px',
			scrollCollapse: true,
			"paging": false,
			"info": false,
			"searching": false,
			stateSave: true
		});
	}

	constructor() {
		super();
		this.state = {
			employees: require('json!../../../data/new_hire.json')
		};
		this.addEmployee = this.addEmployee.bind(this);
	}

	addEmployee(employee) {
		this.setState({
			employees: this.state.employees.concat([employee])
		});
	}

	render() {
		return (
			<div>
				<div className="employeesList">

					<AddEmployeeModal add={this.addEmployee}/>

					<table className="table table-hover">
						<thead>
						<tr>
							<th>Name</th>
							<th>Job Title</th>
							<th>Tenure</th>
							<th>Gender</th>
						</tr>
						</thead>
						<tbody>
						{this.state.employees.map(employee => {
							return (
								<tr>
									<td>{employee.name}</td>
									<td>{employee.jobTitle}</td>
									<td>{employee.tenure}</td>
									<td>{employee.gender}</td>
								</tr>
							);
						})}
						</tbody>
					</table>

					{/*<Table className="table"*/}
					       {/*data={this.state.employees}*/}
					       {/*sortable={[*/}
						       {/*{*/}
							       {/*column: 'Name',*/}
							       {/*sortFunction: function(a, b){*/}
								       {/*var nameA = a.split(' ');*/}
								       {/*var nameB = b.split(' ');*/}
								       {/*return nameA[1].localeCompare(nameB[1]);*/}
							       {/*}*/}
						       {/*}*/}
					       {/*]}*/}
					{/*/>*/}

				</div>
				<div className="graphs">
					<Graphs data={this.state.employees}/>
				</div>
			</div>
		);
	}
}
