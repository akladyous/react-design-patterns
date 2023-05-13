/*
convert to typescript consider adding 'type' or 'interface' to the RegularList props, which accepts 3 props
items : list of objects
resourceName: string
itemComponent: is a react Component

*/
export const RegularList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      {items.map((item) => (
        <ItemComponent key={crypto.randomUUID()} />
      ))}
    </>
  );
};
