import { useState, useCallback } from 'react';
import { generateTodos } from '../data/todosData';
import Todo from './Todo';

const todosList = generateTodos();
export default function Todos() {
  const [todos, setTodos] = useState(todosList);
  const [sortOrder, setSortOrder] = useState('ascending');

  const compareByCreatedAt = useCallback(
    (a, b) => {
      const createdAtA = new Date(a.createdAt);
      const createdAtB = new Date(b.createdAt);

      if (sortOrder === 'ascending') {
        return createdAtA - createdAtB;
      } else {
        return createdAtB - createdAtA;
      }
    },
    [sortOrder],
  );

  const handleSortOrderChange = useCallback((event) => {
    setSortOrder(event.target.value);
  }, []);

  const deleteTodo = useCallback(
    (id) => {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  // console.log(todos[0]);

  return (
    <main className='border w-3/4 mx-auto'>
      <div>
        <label htmlFor='sortOrder'>Sort Order:</label>
        <select
          id='sortOrder'
          value={sortOrder}
          onChange={handleSortOrderChange}
        >
          <option value='ascending'>Ascending</option>
          <option value='descending'>Descending</option>
        </select>
      </div>
      <div>
        {/* <pre>{JSON.stringify(todosList, null, 2)}</pre> */}
        <div className='m-2 p-2'>
          {todos
            .slice(0)
            .sort(compareByCreatedAt)
            .map((todo) => {
              return <Todo todo={todo} />;
              // return (
              //   <div className='flex justify-between m-2' key={todo.id}>
              //     <div>
              //       <p>{todo.title}</p>
              //       <p>{todo.createdAt}</p>
              //     </div>
              //     <div>
              //       <button onClick={deleteTodo.bind(this, todo.id)}>
              //         delete
              //       </button>
              //     </div>
              //   </div>
              // );
            })}
        </div>
      </div>
    </main>
  );
}
