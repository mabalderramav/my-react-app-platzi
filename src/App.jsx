import Counter from "./components/Counter.jsx";
import ToggleButton from "./components/ToggleButton";
import NameForm from "./components/NameForm";
import CounterWithEffect from "./components/CounterWithEffect";
import './App.css'

function App() {
    return (
        <>
            <Counter/>
            <ToggleButton/>
            <h1>
                Form of Names
            </h1>
            <NameForm/>
            <CounterWithEffect />
        </>
    )
}

export default App
