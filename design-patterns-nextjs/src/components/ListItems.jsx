'use client';

export default function ListItems({
  items,
  resourceName,
  itemComponent: WraperComponent,
}) {
  return (
    <>
      <section>
        {items.map((item) => {
          return (
            <div key={crypto.randomUUID()}>
              <WraperComponent {...{ [resourceName]: item }} />
            </div>
          );
        })}
      </section>
    </>
  );
}
