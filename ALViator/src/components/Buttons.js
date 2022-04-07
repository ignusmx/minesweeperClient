import React from "react";
import {connect} from "react-redux";
import {startChannel, stopChannel} from "../modules/task";

const Buttons = (props)=>
{
	const {startChannel, stopChannel} = props;

	return(
		<div style={{display : "flex", width: "400px", justifyContent: "space-between", marginBottom: 20}}>
			<button style={{padding: 10}} onClick={startChannel}>Start</button>
			<button style={{padding: 10}} onClick={stopChannel}>End</button>
		</div>
	);
};

export default connect(null, {startChannel, stopChannel})(Buttons);
