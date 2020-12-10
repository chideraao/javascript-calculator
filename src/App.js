import "./App.css";
import Keypad from "./components/Keypad";
import Result from "./components/Result";
import { ResultProvider } from "./context/ResultContext";

function App() {
	return (
		<ResultProvider>
			<div className="App">
				<h1>JavaScript Calculator</h1>
				<Result />
				<Keypad />
			</div>
		</ResultProvider>
	);
}

export default App;
