import ListItemsRenderProp from './ListItemsRenderProp';
import { todos } from '../../../../data/todos';

const ListItemsRenderPropDemo = () => {
  return (
    <ListItemsRenderProp
      items={todos}
      render={(item) => {
        return <p>{item.title}</p>;
      }}
    />
  );
};
export default ListItemsRenderPropDemo;
