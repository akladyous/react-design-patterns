'use client';

export default function ListItems({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) {
  return (
    <>
      <section>
        {items && Array.isArray(items)
          ? items.map((item) => {
              return (
                <div key={crypto.randomUUID()}>
                  <ItemComponent {...{ [resourceName]: item }} />
                </div>
              );
            })
          : null}
      </section>
    </>
  );
}
