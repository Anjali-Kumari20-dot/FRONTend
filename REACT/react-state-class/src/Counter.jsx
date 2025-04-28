import { useState } from "react"

export default function Counter(){
    let [count, setCount] = useState(0);

    let incCount = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>States in react</h1>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    )
}