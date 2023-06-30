import { Fragment, useState } from 'react';

export default function ListItemsRenderPropThree({ items, render }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Fragment>
      {items.map((item, index) => {
        const isHighlighted = selectedIndex == index;
        const key = item.key ?? crypto.randomUUID();
        return <Fragment key={key}>{render(item, isHighlighted)}</Fragment>;
      })}

      <button
        onClick={() => {
          console.log(selectedIndex);
          setSelectedIndex((i) => (i + 1) % items.length);
        }}
      >
        next
      </button>
    </Fragment>
  );
}
