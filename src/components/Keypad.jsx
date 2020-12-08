import React, { useContext } from "react";
import { ResultContext } from "../context/ResultContext";

function Keypad() {
	const [result, setResult] = useContext(ResultContext);

	const Calculate = (e) => {
		setResult((result) => result + e.target.value);
	};

	const evaluate = () => {
		// eslint-disable-next-line no-eval
		setResult(eval(result));
	};

	const clear = () => {
		setResult("");
	};

	return (
		<div>
			<button className="card" onClick={clear} value="CE">
				CE
			</button>
			<button className="card del" onClick={Calculate} value="Del">
				Del
			</button>
			<button className="card" onClick={Calculate} value="1">
				1
			</button>
			<button className="card" onClick={Calculate} value="2">
				2
			</button>
			<button className="card" onClick={Calculate} value="3">
				3
			</button>
			<button className="card" onClick={Calculate} value="4">
				4
			</button>
			<button className="card" onClick={Calculate} value="5">
				5
			</button>
			<button className="card" onClick={Calculate} value="6">
				6
			</button>
			<button className="card" onClick={Calculate} value="7">
				7
			</button>
			<button className="card" onClick={Calculate} value="8">
				8
			</button>
			<button className="card" onClick={Calculate} value="9">
				9
			</button>
			<button className="card" onClick={Calculate} value="0">
				0
			</button>
			<button className="card" onClick={Calculate} value="(">
				(
			</button>
			<button className="card" onClick={Calculate} value="+">
				+
			</button>
			<button className="card" onClick={Calculate} value="-">
				-
			</button>
			<button className="card" onClick={Calculate} value="*">
				*
			</button>
			<button className="card" onClick={Calculate} value="/">
				/
			</button>
			<button className="card" onClick={evaluate} value="=">
				=
			</button>
			<button className="card" onClick={Calculate} value=")">
				)
			</button>
		</div>
	);
}

export default Keypad;
