import React from 'react';

export default function LabelField({ htmlFor, classes, content, children }) {
  // const { htmlFor, classes, content, children } = props || {};

  return (
    <>
      <label
        htmlFor={htmlFor}
        className={classes}
      >
        {content}
        {children}
      </label>
    </>
  );
}
