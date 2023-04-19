import React from 'react';

export default function TextField(props) {
  const { type, name, classes, ...rest } = props || {};
  return (
    <>
      <input
        type={type}
        name={name}
        className={classes}
        {...rest}
      />
    </>
  );
}
