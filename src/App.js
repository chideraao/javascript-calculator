import "./App.css";
import Keypad from "./components/Keypad";
import Result from "./components/Result";
import Display from "./components/Display";
import { ResultProvider } from "./context/ResultContext";

function App() {
	return (
		<ResultProvider>
			<div className="App">
				<h1>JavaScript Calculator</h1>
				<Display />
				<Result />
				<Keypad />
			</div>
		</ResultProvider>
	);
}

export default App;
