import React from "react"
import Counter from "./Counter.jsx"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { mountCounter: false, counterStep: 0 }
        this.mountCounter = this.mountCounter.bind(this)
        this.umMountCounter = this.umMountCounter.bind(this)

    };
    mountCounter() { this.setState({ mountCounter: true }) }
    umMountCounter() { this.setState({ mountCounter: false }) }

    changeCounterStep() { this.setState({ counterStep: Math.random() }) }
    resetCounterStep() { this.setState({ counterStep: 0 }) }

    render() {
        return (
            <>
                <div>
                    <button onClick={this.mountCounter} disabled={this.state.mountCounter}>Mount Counter</button>
                    <button onClick={this.umMountCounter} disabled={!this.state.mountCounter}>UnMount Counter</button>
                </div>
                <div>
                    <button onClick={this.changeCounterStep.bind(this)}>generate random step value</button>
                </div>
                <div className="counter">
                    {
                        this.state.mountCounter
                            ?
                            <Counter
                                counterStep={this.state.counterStep}
                                resetCounterStep={this.resetCounterStep.bind(this)}
                            />
                            :
                            null
                    }
                </div>
            </>

        )
    }
}


export default App
