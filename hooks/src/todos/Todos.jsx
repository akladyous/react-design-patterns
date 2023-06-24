import { useState } from 'react';
import { generateTodos } from '../data/todosData';

const todosList = generateTodos();
export default function Todos() {
  const [todos, setTodos] = useState(todosList);
  const [sortOrder, setSortOrder] = useState('ascending');

  const compareByCreatedAt = (a, b) => {
    const createdAtA = new Date(a.createdAt);
    const createdAtB = new Date(b.createdAt);

    if (sortOrder === 'ascending') {
      return createdAtA - createdAtB;
    } else {
      return createdAtB - createdAtA;
    }
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const deleteTodo = (id, _e) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

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
        <div>
          {todos
            .slice(0)
            .sort(compareByCreatedAt)
            .map((todo) => {
              return (
                <div className='flex justify-between m-2' key={todo.id}>
                  <div>
                    <p>{todo.title}</p>
                    <p>{todo.createdAt}</p>
                  </div>
                  <div>
                    <button onClick={deleteTodo.bind(this, todo.id)}>
                      delete
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </main>
  );
}
