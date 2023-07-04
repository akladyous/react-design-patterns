import { Fragment } from 'react';

export default function ListItemsRenderProp({ items, render, ...args }) {
  if (!items) return null;

  return (
    <Fragment>
      {items.map((item) => {
        const key = item.id ?? crypto.randomUUID();
        return <Fragment key={key}>{render(item, args)}</Fragment>;
      })}
    </Fragment>
  );
}
