import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            step: 0
        }
        window._rjs = this
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    };
    static defaultProps = {
        step: 0
    }
    increment() {
        this.setState((prevState, props) => ({
            counter: prevState.counter + this.state.step + 1
        }))
    }
    decrement() {
        this.setState({ counter: this.state.counter -= 1 })
    }

    componentDidMount() {
        console.log('component did mount')
    }
    // componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }
    render() {
        return (
            <>
                <div>
                    <p>{this.props.step}</p>
                </div>
                <div>
                    <p style={{ display: 'inline-block' }}>counter :</p> <span>{this.state.counter}</span>
                </div>
                <div>
                    <button onClick={this.increment}>increment</button>
                    <button onClick={this.decrement}>decrement</button>
                </div>
            </>
        )
    }

}

export default Counter;
