export default function ListItemsRenderProp({ items, render }) {
  if (!items) return null;

  return (
    <>
      {items.map((item) => (
        <>
          <ItemComponent />
        </>
      ))}
    </>
  );
}
