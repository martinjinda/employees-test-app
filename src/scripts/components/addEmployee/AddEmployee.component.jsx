import React, {Component} from 'react';
import ReactDOM, {findDOMNode} from 'react-dom';


export default class AddEmployee extends React.Component {
	render() {
		return (
			<div id="addEmployeeForm" className="modal fade addEmployeeForm" tabIndex="-1" role="dialog"
			     aria-labelledby="addEmployeeForm">
				<div className="modal-dialog modal-sm" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
								aria-hidden="true">&times;</span></button>
							<h4 className="modal-title" id="myModalLabel">Add Employee</h4>
						</div>
						<form onSubmit={(e) => this.handleSubmit(e)} ref="addEmployee">
							<div className="modal-body">
								<div className="form-group">
									<label htmlFor="name" className="control-label">Name</label>
									<input type="text" className="form-control" id="name" ref="name" placeholder="Name" required />
								</div>
								<div className="form-group">
									<label htmlFor="jobTitle" className="control-label">Job Title</label>
									<input type="text" className="form-control" id="jobTitle" ref="jobTitle" placeholder="Job Title" required />
								</div>
								<div className="form-group">
									<label htmlFor="tenure" className="control-label">Tenure</label>
									<input type="number" min="0" max="2000" className="form-control" id="tenure" ref="tenure" placeholder="Tenure" required />
								</div>
								<div className="form-group">
									<label htmlFor="gender" className="control-label">Gender</label>
									<select className="form-control" id="gender" ref="gender" required>
										<option value="Female">Female</option>
										<option value="Male">Male</option>
									</select>
								</div>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
								<button type="submit" className="btn btn-primary">Save Employee</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.add({
			name: findDOMNode(this.refs.name).value,
			jobTitle: findDOMNode(this.refs.jobTitle).value,
			tenure: findDOMNode(this.refs.tenure).value,
			gender: findDOMNode(this.refs.gender).value
		});
		findDOMNode(this.refs.addEmployee).reset();
		$('#addEmployeeForm').modal('hide');
	}
}
