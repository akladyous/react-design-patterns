import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            step: 0
        }
        window._rjs = this
        // this.increment = this.increment.bind(this)
    };
    static defaultProps = { step: 3 }
    increment() {
        this.setState((prevState, props) => ({
            counter: prevState.counter + this.state.step + 1
        }), () => { //callback to be called once state
            console.log('completed set state, current state is : ', this.state)
        })
    }
    decrement() {
        this.setState({ counter: this.state.counter -= 1 })
    }

    componentDidMount() {
        console.log('component did mount')
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

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
                    <button onClick={this.increment.bind(this)}>increment</button>
                    <button onClick={this.decrement.bind(this)}>decrement</button>
                </div>
            </>
        )
    }

}

export default Counter;
