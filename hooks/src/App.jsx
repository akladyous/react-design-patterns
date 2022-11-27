import { useEffect } from 'react'
import Counter from "./Counter.jsx"
import CounterWrapper from "./render-prop/CounterWrapper.jsx"
import Counter1 from "./render-prop/Counter1.jsx"

import { Cat, Mouse, MouseTracker } from './render-prop/MouseTracker.jsx'

function App() {

    function callback(counter, increment, decrement) {
        return <Counter1 counter={counter} increment={increment} decrement={decrement} />
    }
    return (
        <>
            <Counter initialCount={10} />
            {/* <CounterWrapper render={callback} /> */}

            <CounterWrapper render={(counter, increment, decrement) => {
                return <Counter1 counter={counter} increment={increment} decrement={decrement} />
            }} Com={Counter1} />


            {/* <MouseTracker /> */}
        </>
    )
}

export default App
