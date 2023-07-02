import ListItemsRenderProp from './ListItemsRenderProp';
import { todos } from '../../../../data/todos';

const RenderPropTwoDemo = () => {
  return (
    <ListItemsRenderProp
      items={todos}
      render={(item) => {
        return <p>{item.title}</p>;
      }}
    />
  );
};
export default RenderPropTwoDemo;
