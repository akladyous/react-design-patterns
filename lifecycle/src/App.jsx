import React from 'react';

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

  render() {
    let isMountedText = this.state.isMounted ? 'unMount' : 'Mount';
    return (
      <main className='main'>
        <button onClick={this.handleCounterMount}>{isMountedText}</button>
      </main>
    );
  }
}
