import React from 'react';
export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('%cshoud component update', 'color: green');
    console.log('current State : ', this.state, 'nextState.counter : ', nextState);
    console.log('current Props : ', this.props, 'nextProps.userId  : ', nextProps);
    return true;
  }

  // componentDidMount() is invoked immediately after a component is mounted (inserted into the tree).
  componentDidMount() {
    console.log('Component did mount');
  }
  /*
    componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().
  */
  componentWillUnmount() {
    console.log('component will unmount');
  }
  increment() {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  }
  decrement() {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}
