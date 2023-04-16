import React from 'react';
import Counter from './Counter';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
    };
    this.handleCounterMount = this.handleCounterMount.bind(this);
  }
  handleCounterMount() {
    this.setState((prevState) => ({ isMounted: !prevState.isMounted }));
  }
  componentDidMount() {
    console.group('Main Component - componentDidMount');
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this.state.isMounted !== nextState.isMounted) {
      return true;
    }
    return false;
  }
  render() {
    let isMountedText = this.state.isMounted ? 'unMount' : 'Mount';
    return (
      <>
        <section className='main'>
          <button onClick={this.handleCounterMount}>{isMountedText}</button>
        </section>
        <section>{this.state.isMounted ? <Counter /> : null}</section>
      </>
    );
  }
}

export default App;
