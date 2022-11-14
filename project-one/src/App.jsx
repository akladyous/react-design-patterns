import React from "react"
import Counter from "./Counter.jsx"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { mountCounter: false }
        this.mountCounter = this.mountCounter.bind(this)
        this.umMountCounter = this.umMountCounter.bind(this)
    };
    mountCounter() { this.setState({ mountCounter: true }) }
    umMountCounter() { this.setState({ mountCounter: false }) }

    render() {
        return (
            <>
                <div>
                    <button onClick={this.mountCounter} disabled={this.state.mountCounter}>Mount Counter</button>
                    <button onClick={this.umMountCounter} disabled={!this.state.mountCounter}>UnMount Counter</button>
                </div>

                <div className="counter">
                    {this.state.mountCounter ? <Counter /> : null}
                </div>
            </>

        )
    }
}


export default App
