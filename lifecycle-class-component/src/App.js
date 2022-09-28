import React from "react";
import Counter from "./Counter.js";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            mount: false,
            random: 0,
            seed: 100
        }

        this.handleMount = () => { this.setState( {mount: !this.state.mount} ) }
        this.randomNum =   () => { this.setState( {random: Math.floor(Math.random() * 10)}) }
        this.seedGenerator = () => { this.setState( {seed: Math.floor(Math.random() * 10)}) }
    };

    // ----------------------------------------------------------------
    shouldComponentUpdate(nextProps, nextState) {
        console.log("PARENT - Shoud Component Update")
        return true
    }
    // ----------------------------------------------------------------
    componentDidMount(){
        console.log("PARENT - Component did mount");
    /*
    componentDidMount() is invoked immediately after a component is mounted (inserted into the tree).
    */
    }

    componentWillUnmount() {
        console.log("PARENT - component will unmount");
        // console.log("--------------------------");
    /*
    componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().
    */
    }
    // ----------------------------------------------------------------
    render() {
        console.log("PARENT - render method");
        return (
            <div className="container py-3 my-3 border w-75">
                <h3>Parent Component</h3>
                <div className="row">
                    <div className="col-2">
                        <button onClick={this.handleMount}>
                            {this.state.mount ? "UnMount Child" : "Mount Child"}
                        </button>
                    </div>
                    <div className="col-2">
                        <button onClick={this.randomNum}>Random Number</button>
                    </div>
                    <div className="col-1">{this.state.random}</div>
                    <div className="col-2">
                        <button onClick={this.seedGenerator}>
                            Generate Seed
                        </button>
                    </div>
                    <div className="col-1">{this.state.seed}</div>
                </div>
                {this.state.mount ? (
                    <Counter
                        random={this.state.random}
                        seed={this.state.seed}
                    />
                ) : null}
            </div>
        );
    }
};

export default App;