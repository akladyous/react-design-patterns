import { useState } from 'react';

const compose =
  (...functions) =>
  (...args) =>
    functions.forEach((fn) => fn && fn(...args));

export default function useToggle(initialState = false) {
  const [toggleState, setToggleState] = useState(initialState);

  const toggle = () => setToggleState(!toggleState);

  const getToggleProps = (props = {}) => {
    return {
      'aria-expanded': toggleState,
      ...props,
      onclick: compose,
    };
  };
}
