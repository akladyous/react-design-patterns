export default function ListItemsComponent({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) {
  if (!items) return null;
  return (
    <>
      {items.map((item) => (
        <div key={items?.id || crypto.randomUUID()}>
          <ItemComponent {...{ [resourceName]: item }} />
        </div>
      ))}
    </>
  );
}
