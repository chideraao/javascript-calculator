import React, { createContext, useReducer, useState } from "react";
import { resultReducer } from "./ResultReducer";

export const ResultContext = createContext();

export const ResultProvider = (props) => {
	const [state, dispatch] = useReducer(resultReducer, { result: "" });
	return (
		<ResultContext.Provider value={[state, dispatch]}>
			{props.children}
		</ResultContext.Provider>
	);
};
