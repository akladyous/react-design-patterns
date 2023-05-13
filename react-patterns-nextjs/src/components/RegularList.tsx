import { FC, ReactNode } from 'react';

interface RegularListProps<T> {
  items: T[];
  resourceName: string;
  itemComponent: FC<{ key: string; resourceName: string }>;
}

interface ItemListProps {
  items: object[];
  resourceName: string;
}
interface ItemsListProps {
  itemComponent: FC<ItemsListProps>;
}

export const Prova = ({ childrenElement }: AppProps) => {
  return <div>{}</div>;
};

export function RegularList<T>(props: RegularListProps<T>): JSX.Element {
  const { items, resourceName, itemComponent: ItemComponent } = props;
  return (
    <>
      {items.map((item, index) => (
        <ItemComponent
          key={crypto.randomUUID()}
          resourceName={resourceName}
        />
      ))}
    </>
  );
}

// how to use RegularList passing items & resourceName and itemComponent

// const ProvaComponent: React.FC<{ key: string; resourceName: string }> = ({
//   key,
//   resourceName,
// }) => {
//   return <div>{resourceName}</div>;
// };
// const MyComponent: React.FC = ()=>{}
// interface Props1 {
//   items: object[];
//   resourceName: string;
// }
// interface Props2 extends Props1 {
//   itemComponent: React.FC;
// }
// const cazzo: Props2 = {
//   items: [{}, {}],
//   resourceName: 'test',
//   itemComponent: MyComponent,
// };
