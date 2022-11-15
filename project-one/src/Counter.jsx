import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props)
        console.log('props : ', props)
        this.state = {
            counter: 0,
            // counterStep: this.props.counterStep || 0
        }
        window._rjs = this
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

    componentDidMount() {
        console.log('component did mount')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps?.counterStep !== this.props?.counterStep) {
            return false
        }
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {

    }
    // componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }
    render() {
        return (
            <>
                <div>
                    <p>props {this.props.counterStep}</p>
                </div>
                <div>
                    <p style={{ display: 'inline-block' }}>counter :</p> <span>{this.state.counter}</span>
                </div>
                <div>
                    <button onClick={this.increment}>increment</button>
                    <button onClick={this.decrement}>decrement</button>
                    <button onClick={this.props.resetCounterStep}>reset counter step</button>
                </div>
            </>
        )
    }

}

export default Counter;
