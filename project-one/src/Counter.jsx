import React from 'react';
import './counter.css'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            // counterStep: this.props.counterStep || 0
        }
        window._counter = this
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    };
    static defaultProps = {
        counterStep: 0
    }
    increment() {
        this.setState((prevState, props) => ({
            counter: prevState.counter + this.props.counterStep + 1
        }))
    }
    decrement() {
        this.setState({ counter: this.state.counter - this.props.counterStep - 1 })
    }
    throwError() {
        throw new Error('I crashed!')
    }

    // life cycle
    componentDidMount() {
        console.log('component did mount')
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        return null

        /*
        getSnapshotBeforeUpdate() is invoked right before the most recently rendered output is committed to e.g. the DOM.
        It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed.
        Any value returned by this lifecycle method will be passed as a parameter to componentDidUpdate().

        This use case is not common, but it may occur in UIs like a chat thread that need to handle scroll position in a special way.

        A snapshot value (or null) should be returned.
        */
    }
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps')

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        /*
        shouldComponentUpdate() is invoked before rendering when new props or state are being received.
        Defaults to true. This method is not called for the initial render or when forceUpdate() is used.
        */
        if (nextProps?.counterStep !== this.props?.counterStep) {
            return false
        }
        return true
    }

    render() {
        console.log('render')
        if (this.state.counter > 5) {
            throw new Error('I crashed!')
        }
        return (
            <div className='counter-component'>
                <div className='props-value'>
                    <p>props {this.props.counterStep}</p>
                </div>
                <div className='counter-value'>
                    <p style={{ display: 'inline-block' }}>counter :</p> <span>{this.state.counter}</span>
                </div>
                <div className='counter-btns'>
                    <button onClick={this.increment}>increment</button>
                    <button onClick={this.decrement}>decrement</button>
                </div>
                <div className='reset-counter'>
                    <button onClick={this.props.resetCounterStep}>reset counter step</button>
                </div>

            </div>
        )
    }
    //---------------------------------------------------------------------------------------------------------
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
        /*
        componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.
        Use this as an opportunity to operate on the DOM when the component has been updated.
        This is also a good place to do network requests as long as you compare the current props to previous props
        (e.g. a network request may not be necessary if the props have not changed).
        */
        console.log('componentDidUpdate')
    }
    //---------------------------------------------------------------------------------------------------------
    componentWillUnmount() {
        console.log('componentWillUnmount')
        /*
            componentWillUnmount() is invoked immediately before a component is unmounted and destroyed.
            Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests,
            or cleaning up any subscriptions that were created in componentDidMount().
        */
    }
}

export default Counter;
