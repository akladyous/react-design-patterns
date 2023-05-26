import { useState, useEffect } from 'react';

export default function (props) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('reRender');
  }, []);

  return (
    <>
      <div className='counter-component'>
        <button></button>
        <p></p>
        <button></button>
      </div>
    </>
  );
}
