import react from "react";


class TempComponent extends react.Component{
    componentWillUnmount(){
        // Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as cancelled network requests, or cleaning up any DOM elements created in componentDidMount.
        console.log("componentWillUnmount");
    }
    render(){
        return <div>
            <h4>ComponentWillUnmount Test</h4>
        </div>
    }
}

export default class Counter extends react.Component {

    constructor(props) {
        super(props);
        console.log("Contructor")
        this.state = {
            counter : 0,
            display : true,
            freez: false
        };
        this.increment = ()=> this.setState({counter: this.state.counter + 1})
        this.decrement = ()=> this.setState({counter: this.state.counter - 1})
        this.delete    = ()=> this.setState({display: !this.state.display});
    };

    render(){
        console.log("Render");
        let test;
        if(this.state.display === true){
            test = <TempComponent />
        }
        return (
            <div>
                {test}
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
                counter: {this.state.counter}
                <br />
                <br />
                <button onClick={this.delete}>unMount TempComponent</button>
            </div>
        )
    };
    ComponentWillMount(){
        console.log("component will mount")
    }
    
    shouldComponentUpdate(nextProps, nextState){
        // console.log("shoud component update")
        if(nextState.counter >= 10){
            console.log(`shoud component update > 10. current state: ${this.state.counter}`)
            return false
        } else { 
            console.log("shoud component update <= 10")
            return true
        }
    }
    componentDidUpdate(prevProps, prevState, snapShot) {
        // Called immediately after updating occurs. Not called for the initial render.
        if(prevState.counter !== this.state.counter){
            console.log("counter has changed")
        }
        console.log("component did update")
    }

    componentDidMount(){
        // "Called immediately after a component is mounted. Setting state here will trigger re-rendering.
        console.log("component did mounted")
    }
    componentWillUnmount(){
        // componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().
        console.log("component will unmount")
    };


    
}