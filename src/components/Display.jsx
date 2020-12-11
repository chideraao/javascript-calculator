import React, { useContext } from "react";
import { ResultContext } from "../context/ResultContext";

function Display() {
	// eslint-disable-next-line no-unused-vars
	const [state, dispatch] = useContext(ResultContext);
	return <div>{state.display !== "" ? <div>{state.display}</div> : ""}</div>;
}

export default Display;
