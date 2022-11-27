import { useState, useEffect } from 'react'

export default function CounterWrapper(props) {
    console.log('CounterWrapper Props: ', props)
    const [counter, setCounter] = useState(props.initialCount || 0)

    useEffect(() => {
        console.log('CounterWrapper')
    })

    function increment() {
        setCounter(counter + 1)
    }
    function decrement() {
        setCounter(counter - 1)
    }
    return (
        <div className="container my-3 border">
            <h4>Render Prop</h4>
            {props.render(counter, increment, decrement)}
        </div>
    )
}
