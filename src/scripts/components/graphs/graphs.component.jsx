import React, {Component} from 'react';
import rd3 from 'rd3';

import graphsStyle from './graphs.scss';


export default class Graphs extends React.Component {
	render() {

// init charts
		var PieChart = rd3.PieChart;
		var BarChart = rd3.BarChart;


// convert data for pie graph
		var PieData = this.props.data.reduce(function (hash) {
			return function (r, a) {
				if (!hash[a.jobTitle]) {
					hash[a.jobTitle] = {label: a.jobTitle, value: 0};
					r.push(hash[a.jobTitle]);
				}
				hash[a.jobTitle].value++;
				return r;
			};
		}(Object.create(null)), []);

// count gender
		var countGender = [];
		for (var i = 0, j = this.props.data.length; i < j; i++) {
			if (countGender[this.props.data[i]['gender']]) {
				countGender[this.props.data[i]['gender']]++;
			}
			else {
				countGender[this.props.data[i]['gender']] = 1;
			}
		}

// data for bar chart
		var barData = [{
			"name": "Gender",
			"values": [
				{"x": 'Female', "y": countGender['Female']},
				{"x": 'Male', "y": countGender['Male']},
			]
		}];

// create pie chart
		var Chart = React.createClass({
			render: function () {
				return (
					<PieChart
						data={PieData}
						width={470}
						height={300}
						radius={110}
						innerRadius={20}
						sectorBorderColor="white"
					/>
				)
			}
		});

// create bar chart
		var Chart2 = React.createClass({
			render: function () {
				return (
					<BarChart
						data={barData}
						width={470}
						height={300}
					/>
				)
			}
		});

		return (
			<div>
				<div className="col-md-6">
					<h2 className="h4 text-muted">Employees by Job Title</h2>
					<div className="graphs--block graph1">
						<Chart />
					</div>
				</div>
				<div className="col-md-6">
					<h2 className="h4 text-muted">Employees by Gender</h2>
					<div className="graphs--block graph2">
						<Chart2/>
					</div>
				</div>
			</div>
		);
	}
}