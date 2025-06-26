import Card from "./components/Card";
import './App.css'

function App() {
    const items = ["React", "Vue", "Angular", "Vite", "JavaScript"];
    return (
        <section>
            <h1>!Hello word!</h1>
            <Card title="Welcome to React" description="This is a simple card component." />
            <Card title="Card two" description="This is a simple card component." />
            <ul>
                {
                    items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </section>
    )
}

export default App
