import React from 'react';

interface RegularListProps<T> {
  items: T[];
  resourceName: string;
  itemComponent: React.FC<{ key: string; resourceName: string }>;
}

export function RegularList<T>(props: RegularListProps<T>): JSX.Element {
  const { items, resourceName, itemComponent: ItemComponent } = props;
  return (
    <>
      {items.map((item, index) => (
        <ItemComponent
          key={crypto.randomUUID()}
          resourceName={resourceName}
          {...{ [resourceName]: item }}
        />
      ))}
    </>
  );
}

// Define a sample component that will render each item
const SampleItemComponent: React.FC<{ key: string; resourceName: string }> = ({
  key,
  resourceName,
}) => {
  return (
    <div>
      {resourceName}: {key}
    </div>
  );
};

// Example usage of RegularList
const App = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];
  const resourceName = 'Resource';

  return (
    <div>
      <RegularList
        items={items}
        resourceName={resourceName}
        itemComponent={SampleItemComponent}
      />
    </div>
  );
};

export default App;
