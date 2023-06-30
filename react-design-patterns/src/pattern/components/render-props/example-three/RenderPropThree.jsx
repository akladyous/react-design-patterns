const products = [
  { title: 'one', id: 1 },
  { title: 'two', id: 2 },
  { title: 'three', id: 3 },
  { title: 'four', id: 4 },
  { title: 'five', id: 5 },
];

export default function RenderPropThree({ items, render }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div>
      <p>one</p>
      <p>two</p>
      <p>three</p>
      <button>next</button>
    </div>
  );
}
const Selected = ({ title, isHighlighted }) => {
  return (
    <div className={`${isHighlighted ? 'bg-yellow-100' : ''}`}>
      <p>{title}</p>
    </div>
  );
};

/*

const [selectedIndex, setSelectedIndex] = useState(0);

return (
  <div>
    {items.map((item, index) => {
      const isHighlighted = index === selectedIndex;
      return (
        <div
          className={[
            'border-dashed',
            isHighlighted ? ' bg-yellow-200' : '',
          ].join(' ')}
        >
          {item}
        </div>
      );
    })}
  </div>
);
*/
