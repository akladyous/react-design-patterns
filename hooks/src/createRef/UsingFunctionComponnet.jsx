import React from 'react';

export default function UsingFunctionComponnet() {
  const inputRef = React.createRef();
  return (
    <div>
      <input
        type='text'
        name='firstName'
        ref={inputRef}
      />
      <button onClick={() => inputRef.current.select()}>
        Select Input Text
      </button>
    </div>
  );
}
