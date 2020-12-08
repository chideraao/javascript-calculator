import React, { useContext } from "react";
import { ResultContext } from "../context/ResultContext";

function Result() {
	const [result, setResult] = useContext(ResultContext);
	return <div>{result}</div>;
}

export default Result;
