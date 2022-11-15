import React from "react"
import Counter from "./Counter.jsx"
import ErrorBoundary from './ErrorBoundary.jsx'

class App extends React.Component {
    constructor(props) {
        super(props)
        window._app = self
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
            <div className="app-component">
                <div className="mount-container">
                    <button onClick={this.mountCounter} disabled={this.state.mountCounter}>Mount Counter</button>
                    <button onClick={this.umMountCounter} disabled={!this.state.mountCounter}>UnMount Counter</button>
                </div>
                <div>
                    <button onClick={this.changeCounterStep.bind(this)}>generate random step value</button>
                </div>
                {
                    this.state.mountCounter
                        ?
                        <ErrorBoundary>
                            <Counter
                                counterStep={this.state.counterStep}
                                resetCounterStep={this.resetCounterStep.bind(this)}
                            />
                        </ErrorBoundary>
                        :
                        null
                }
            </div>

        )
    }
}


export default App
