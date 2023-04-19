import React from 'react';

export default function TextField({ type, name, classes, label, ...rest }) {
  return (
    <>
      <label
        content={label ? label : name}
        htmlFor={name}
        className='block text-sm font-medium text-gray-900 capitalize'
      />
      <input
        type={type}
        name={name}
        className={classes}
        {...rest}
      />
    </>
  );
}
