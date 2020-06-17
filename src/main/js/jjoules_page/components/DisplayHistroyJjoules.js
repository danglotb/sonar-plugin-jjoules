import React from "react";
import ReactDOM from 'react-dom';
// exposes React components exposed by SonarQube.
import { DeferredSpinner } from "sonar-components";

function Method(props) {
	return (
		<div className="result">
			<h6 className="method" 
			>{props.testName}</h6>
			<p> {props.energy} </p>
			<p> {props.duration} </p>
		</div>

	);
}

class ClassTest extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			methods: props.methods,
			className: props.className,
		}
	}

	renderMethod(i) {
		const method = this.state.methods[i];
		return (
			<Method 
				method={method.testName}
				energy={method.energy}
				duration={method.duration}
			/>
		);
	}

	render() {

		return (
			<div className="classTest">
				<h4 className="classTestName">
					{this.state.className}
				</h4>
				{this.state.methods.map((method,idx) =>
					renderMethod(idx)
				)}
			</div>
		);
	}

}

export default class AllTests extends React.Component {
	constructor(props){
		super(props);
		console.log(props);
		console.log(props.data);
		console.log(props.classesNames);
		this.state = {
			allClassesNames: props.data.claasesNames,
			data: props.data.methods,
		}
	}

	renderClassTest(methods,className) {
		return (
			<div className="classe">
				<ClassTest 
					methods={methods}
					className={className}
				/>
			</div>
		);
	}
	render() {

		return (
			<div className="allClasses">

				{this.state.data.map((methods,idx) => 
					renderClassTest(methods,this.state.allClassesNames[idx])
				)}
			</div>
		)
	}
}