import { users } from '@/data/users';

interface Props<T> {
  items: T[];
  resourceName: string;
  itemComponent: React.FC<{ key: React.Key; resourceName: T }>;
}

export default function RegularList<T>(props: Props<T>) {
  const { items, resourceName, itemComponent: ItemComponent } = props;
  return (
    <>
      {items.map((item) => (
        <ItemComponent
          key={crypto.randomUUID()}
          resourceName={item}
          {...{ [resourceName]: item }}
        />
      ))}
    </>
  );
}
