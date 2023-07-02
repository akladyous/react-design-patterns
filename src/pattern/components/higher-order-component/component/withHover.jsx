import { useState } from 'react';

export default function withHover(Element) {
  return (props) => {
    const [hovering, setHover] = useState(false);

    const onMouseOver = (_event) => {
      setHover(true);
    };
    const onMouseOut = (_event) => {
      setHover(false);
    };

    return (
      <div
        onMouseOver={onMouseOut}
        onMouseOut={onMouseOut}
        className='group relative bg-purple-50 mx-10'
      >
        <Element
          {...props}
          hovering={hovering}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
        />
        <span className='absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100'>
          ✨ You hover me!
        </span>
      </div>
    );
  };
}
