import React from "react";

export const CALCULATE_TOTAL = "EVALUATE_TOTAL";
export const DELETE = "DELETE";
export const CLEAR = "CLEAR";
export const VALUE_KEYS = "VALUE_KEYS";

const calculate = (button, result) => {
	const updatedResult = [...result];
};

export const resultReducer = (state, action) => {
	switch (action.type) {
		case CALCULATE_TOTAL:
			return calculate(action.button, state);
		case DELETE:
			return;
		case CLEAR:
			return;
		case VALUE_KEYS:
			return;
		default:
			return state;
	}
};
