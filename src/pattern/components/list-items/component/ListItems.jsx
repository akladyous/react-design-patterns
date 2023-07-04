/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';

export default function ListItems({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) {
  if (!items) return null;

  return (
    <>
      {items.map((item) => {
        const key = item?.id ?? crypto.randomUUID();
        return (
          <Fragment key={key}>
            <ItemComponent {...{ [resourceName]: item }} />
          </Fragment>
        );
      })}
    </>
  );
}
