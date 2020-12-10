export const CALCULATE_TOTAL = "CALCULATE_TOTAL";
export const DELETE = "DELETE";
export const CLEAR = "CLEAR";
export const KEY_PRESS = "KEY_PRESS";

// const keyPress = (e) => {
// 	const updatedResult = {};
// 	console.log(e);
// 	//updatedResult({ result: e.target.value });
// 	return updatedResult;
// 	//return {result: updatedResult}
// };

export const resultReducer = (state, action) => {
	switch (action.type) {
		case CALCULATE_TOTAL:
			return { ...state, result: eval(state.result) };
		case DELETE:
			return { ...state, result: state.result.slice(0, -1) };
		case CLEAR:
			return { ...state, result: "" };
		case KEY_PRESS:
			return { ...state, result: state.result + action.payload };
		default:
			return state;
	}
};
