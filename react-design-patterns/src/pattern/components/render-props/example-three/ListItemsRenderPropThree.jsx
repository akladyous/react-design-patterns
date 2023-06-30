import { Fragment } from 'react';
import { todos } from '../../../../data/todos';

export default function ListItemsRenderPropThree({ items, render }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Fragment>
      {items.map((item, index) => {
        const isHighlighted = selectedIndex == index;
        const key = item.key ?? crypto.randomUUID();
        return <Fragment key={key}>{render(item, isHighlighted)}</Fragment>;
      })}

      <button
        onClick={() => {
          setSelectedIndex((i) => (i + 1) % items.length);
        }}
      >
        next
      </button>
    </Fragment>
  );
}

function RenderPropList() {}
function Row({ title, isHighlighted }) {
  return (
    <div className={['Row', isHighlighted ? 'bg-yellow-100' : ''].join(' ')}>
      {title}
    </div>
  );
}
