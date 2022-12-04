import React from 'react'
import CounterWrapper from './CounterWrapper.jsx'

export default function withCounter(Component) {
    return class extends React.Component {
        callback(counter, increment, decrement) {
            return <Component counter={counter} increment={increment} decrement={decrement} />
        }
        render() {
            return (
                <CounterWrapper render={this.callback.bind(this)} />
            )
        }
    }
}
