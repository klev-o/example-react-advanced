import {useState} from "react";
//import './Counter.scss'
import classes from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div className={classes.button}>
            <h2>{count}</h2>
            <button onClick={increment}>Up!</button>
        </div>
    )
}