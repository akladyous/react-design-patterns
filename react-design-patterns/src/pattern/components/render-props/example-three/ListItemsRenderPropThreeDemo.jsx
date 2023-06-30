import { todos } from '../../../../data/todos';
import ListItemsRenderPropThree from './ListItemsRenderPropThree';

export default function ListItemsRenderPropThreeDemo() {
  return (
    <div className='border py-3 p-2 w-3/5 mx-auto'>
      <ListItemsRenderPropThree
        items={todos.slice(0, 10)}
        render={(item, isHighlighted) => {
          return Row({ item, isHighlighted });
        }}
      />
    </div>
  );
}

function Row({ item, isHighlighted }) {
  return (
    <div className={`border my-1 ${isHighlighted ? 'bg-yellow-50' : ''}`}>
      <p className='px-1'>{item.title}</p>
    </div>
  );
}
