import React, { forwardRef } from 'react';

function FormTextField({ type, name, classes, label, ...rest }, ref) {
  const className =
    'mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1';

  return (
    <>
      <label
        htmlFor={name}
        className='block text-sm font-medium text-gray-900 capitalize'
      >
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          {label ? label : name}
        </span>
      </label>

      <input
        ref={ref}
        type={type}
        name={name}
        className={classes ? classes : className}
        {...rest}
      />
    </>
  );
}
const TextField = forwardRef(FormTextField);
export default TextField;
