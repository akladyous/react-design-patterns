import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    console.log('%cCHILD - Constructor', 'color: blue');
    console.log('\t|');
    super(props);
    this.state = {
      counter: 0,
      seed: 1,
      name: 'david',
    };
    this.increment = () => {
      this.setState({ counter: this.state.counter + 1 });
    };
    this.decrement = () => {
      this.setState({ counter: this.state.counter - 1 });
    };
  }
  // ----------------------------------------------------------------
  static getDerivedStateFromProps(props, state) {
    console.log('%cCHILD - get derived State from props', 'color: red');
    console.log('\t Received props : ', props);
    console.log('\t Current state : ', state);
    if (props.seed && props.seed !== state.seed) {
      return {
        counter: state.counter,
        seed: props.seed,
        name: state.name.toUpperCase(),
      };
    }
    return null;
    /*
        getDerivedStateFromProps is invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing.
        This method exists for rare use cases where the state depends on changes in props over time.
        */
  }
  // ----------------------------------------------------------------
  shouldComponentUpdate(nextProps, nextState) {
    console.log('%cCHILD - Shoud component update', 'color: blue');
    console.log('\t| Current Props : ', this.props);
    console.log('\t| Next    Props : ', nextProps);
    console.log('\t| Current State : ', this.state);
    console.log('\t| Next    State : ', nextState);
    console.log('\t|');
    if (nextProps.random && nextProps.random !== this.props.random) {
      console.log('\t| component will not be updated ');
      return false;
    }
    console.log('\t| Component will be updated |');
    return true;
    /*
        Use shouldComponentUpdate() to let React know if a component’s output is not affected by the current change in state or props.
        shouldComponentUpdate() is invoked before rendering when new props or state are being received. Defaults to true.
        */
  }
  // ----------------------------------------------------------------
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('%cCHILD - Get SnapShot Before Update', 'color: blue');
    console.log('\t| Current Props : ', this.props);
    console.log('\t| Next    Props : ', prevProps);
    console.log('\t| Current State : ', this.state);
    console.log('\t| Next    State : ', prevState);
    console.log('\t|');
    return null;
    /*
    getSnapshotBeforeUpdate() is invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed. Any value returned by this lifecycle method will be passed as a parameter to componentDidUpdate().
    */
  }
  // ----------------------------------------------------------------
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('%cCHILD - component did update', 'color: blue');
    console.log('\t| Current Props : ', this.props);
    console.log('\t| Next    Props : ', prevProps);
    console.log('\t| Current State : ', this.state);
    console.log('\t| Next    State : ', prevState);
    console.log('\t|');
    /*
    componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.
    This is also a good place to do network requests as long as you compare the current props to previous props (e.g. a network request may not be necessary if the props have not changed).
    */
  }
  // ----------------------------------------------------------------
  componentDidMount() {
    console.log('CHILD - Component did mount');
    console.log('________________________________________________');
    /*
    componentDidMount() is invoked immediately after a component is mounted (inserted into the tree).
    */
  }

  componentWillUnmount() {
    console.log('CHILD - Component Will Unmount');
    console.log('\t|');
    /*
    componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().
    */
  }
  // ----------------------------------------------------------------
  render() {
    console.log('CHILD - Render Method');
    console.log('\t|');
    return (
      <div className='container my-2 py-2 border'>
        <h4>Child Component</h4>
        <div className='row'>
          <div className='col-2'>
            <button onClick={this.increment}>Increment</button>
          </div>
          <div className='col-1'>
            <div>{this.state.counter}</div>
          </div>
          <div className='col-2'>
            <button onClick={this.decrement}>Decrement</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
