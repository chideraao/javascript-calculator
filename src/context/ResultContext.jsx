/**setting up the context */
import React, { createContext, useReducer } from "react";
import { resultReducer } from "./ResultReducer";

export const ResultContext = createContext();

export const ResultProvider = (props) => {
	const [state, dispatch] = useReducer(resultReducer, {
		result: "",
		display: "",
	});
	return (
		<ResultContext.Provider value={[state, dispatch]}>
			{props.children}
		</ResultContext.Provider>
	);
};
