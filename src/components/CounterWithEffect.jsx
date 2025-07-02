import {useEffect, useState} from 'react';

const CounterWithEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`Counter value changed: ${count}`);
    }, [count]); // Dependency array ensures effect runs only when count changes

    return (
        <div>
            <p> this counter is : {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
};

export default CounterWithEffect;