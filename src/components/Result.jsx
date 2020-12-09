import React, { useContext } from "react";
import { ResultContext } from "../context/ResultContext";

function Result() {
	const [state, dispatch] = useContext(ResultContext);
	console.log(state);
	return <div>{state.result}</div>;
}

export default Result;
