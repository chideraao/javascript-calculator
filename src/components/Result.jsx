import React, { useContext } from "react";
import { ResultContext } from "../context/ResultContext";

function Result() {
	// eslint-disable-next-line no-unused-vars
	const [state, dispatch] = useContext(ResultContext);
	return <div>{state.result}</div>;
}

export default Result;
