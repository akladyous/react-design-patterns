import React from 'react';
const ErrorComponent = () => <div>{this.props.ignore}</div>;

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      userId: 0,
      userName: 'david',
    };

    // this.increment = () => this.state.counter++;
    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  /*
    the purpose of this method is have the chance to update the state as the props are changed
    getDerivedStateFromProps is invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing.

    https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
  */
  static getDerivedStateFromProps(props, state) {
    console.log('get derived state from props');
    console.log('\tprops : ', props);
    console.log('\tstate : ', state);
    console.log('----');
    if (props.userId && props.userId !== state.userId) {
      return {
        userId: props.userId,
        // counter: props.userId
        userName: state.userName.toUpperCase(),
      };
    }
    return null;
  }

  //  ----------------------------------------------------------------
  shouldComponentUpdate(nextProps, nextState) {
    console.log('%cshoud component update', 'color: green');
    console.log('currentState.counter : ', this.state.counter, 'nextState.counter : ', nextState.counter);
    console.log('currentProps.userId  : ', this.props.userId, 'nextProps.userId  : ', nextProps.userId);
    // if(this.props.userId !== nextProps.userId){
    //     console.log('component disabled to render')
    //     console.groupEnd('--------------------------');
    //     return false
    // }
    // console.groupEnd('--------------------------');
    return true;
  }
  /* this method let react to know if component outputs is not affected by the current change in state and props.
      if shouldComponentUpdate return false, then render(), componentDidUpdate() will not be invoked.
      https://reactjs.org/docs/optimizing-performance.html#shouldcomponentupdate-in-action
      https://reactjs.org/docs/react-component.html#shouldcomponentupdate
      */
  //  ----------------------------------------------------------------
  /*
      getSnapshotBeforeUpdate() is invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed.
      */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('--------------------------');
    console.log('Snapshot before update');
    console.log('prevProps.userId : ' + prevProps.userId, ' | ', 'prevState.counter : ' + prevState.counter);
    console.log('--------------------------');
    return { prova: 10 };
  }
  //  componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component did update');
    console.log('prevProps.userId ' + prevProps.userId, 'currentProps: ' + this.props.userId);
    console.log('prevState: ' + prevState.counter, 'currentState: ' + this.state.counter);
    console.log(this.state.userName);
    console.log('--------------------------');
  }

  componentDidCatch(error, info) {
    console.log('Component did catch');
    console.log(error, info);
    console.log('--------------------------');
  }
  // componentDidMount() is invoked immediately after a component is mounted (inserted into the tree).
  componentDidMount() {
    console.log('--------------------------');
    console.log('Component did mount');
  }
  componentWillUnmount() {
    console.log('--------------------------');
    console.log('component will unmount');
    console.log('--------------------------');
  }
  /*
      componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().
      */

  render() {
    console.log('Render method');
    return (
      <div>
        <div>
          <p>user id : {this.state.userId}</p>
        </div>
        <div>
          <p>Counter: {this.state.counter}</p>
          <button onClick={this.increment}>increment</button>
          <button onClick={this.decrement}>decrement</button>
        </div>
        <br />
        <div>
          <h2>componentDidCatch</h2>
          {/* <h2>xx {this.props.children}</h2> */}
          {/* <ErrorComponent /> */}
        </div>
      </div>
    );
  }
}
