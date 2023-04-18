import { useDebugValue } from 'react';

const useCurrentDate = () => {
  window.navigator.onLine;
  useDebugValue('useCurrentDate hook');
  return new Date().toLocaleString();
};
import React from 'react';

export default function UseDebugValueDemo() {
  const currentDate = useCurrentDate();
  return <div>{currentDate}</div>;
}
