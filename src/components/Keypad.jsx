import React, { useContext } from "react";
import { ResultContext } from "../context/ResultContext";
import {
	CALCULATE_TOTAL,
	CLEAR,
	DELETE,
	ERROR,
	KEY_PRESS,
} from "../context/ResultReducer";

function Keypad() {
	// eslint-disable-next-line no-unused-vars
	const [state, dispatch] = useContext(ResultContext);

	const keyPress = (e) => {
		dispatch({ type: KEY_PRESS, payload: e.target.value });
	};

	const calculate = () => {
		try {
			dispatch({ type: CALCULATE_TOTAL });
		} catch {
			dispatch({ type: ERROR });
		}
	};

	const clearResult = (result) => {
		dispatch({ type: CLEAR });
	};

	const deleteItem = () => {
		if (state.result !== "") {
			dispatch({ type: DELETE });
		}
	};

	return (
		<div className="container grid">
			<button className="card" onClick={keyPress} value="7">
				7
			</button>
			<button className="card" onClick={keyPress} value="8">
				8
			</button>
			<button className="card" onClick={keyPress} value="9">
				9
			</button>
			<button className="card" onClick={keyPress} value="(">
				(
			</button>

			<button className="card" onClick={keyPress} value=")">
				)
			</button>

			<button className="card" onClick={keyPress} value="4">
				4
			</button>
			<button className="card" onClick={keyPress} value="5">
				5
			</button>
			<button className="card" onClick={keyPress} value="6">
				6
			</button>
			<button className="card" onClick={keyPress} value="*">
				*
			</button>
			<button className="card" onClick={keyPress} value="/">
				/
			</button>

			<button className="card" onClick={keyPress} value="1">
				1
			</button>
			<button className="card" onClick={keyPress} value="2">
				2
			</button>
			<button className="card" onClick={keyPress} value="3">
				3
			</button>
			<button className="card" onClick={keyPress} value="-">
				-
			</button>
			<button className="card" onClick={keyPress} value="+">
				+
			</button>
			<button className="card" onClick={keyPress} value="0">
				0
			</button>
			<button className="card" onClick={keyPress} value=".">
				.
			</button>
			<button className="card" onClick={calculate} value="=">
				=
			</button>
			<button className="card del" onClick={deleteItem} value="Del">
				Del
			</button>

			<button className="card del" onClick={clearResult} value="CE">
				AC
			</button>
		</div>
	);
}

export default Keypad;
