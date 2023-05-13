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
        <ItemComponent
          key={crypto.randomUUID()}
          {...{ [resourceName]: item }}
        />
      ))}
    </>
  );
};

try again

convert to typescript and consider react container component pattern with the following constrains:
  items: list of objects
  resourceName: string
  itemComponent: by mapping over items, return the ItemComponent with React.key assigned on each loop as well as the resourceName
