import { useState } from 'react';

export default function MouseRenderProp({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(event) {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  }
  return (
    <div
      className='border bg-yellow-50 min-h-screen'
      onMouseMove={handleMouseMove}
    >
      {render(position)}
    </div>
  );
}
