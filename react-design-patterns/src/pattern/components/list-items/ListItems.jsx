/* eslint-disable react/prop-types */
import React from 'react';

export default function ListItems({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) {
  if (!items) return null;

  return (
    <>
      {items.map((item) => {
        return (
          <div key={crypto.randomUUID()}>
            <ItemComponent {...{ [resourceName]: item }} />
          </div>
        );
      })}
    </>
  );
}
