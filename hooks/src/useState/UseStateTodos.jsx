import { useState, useEffect, useCallback } from 'react';
import { todos as initialState } from '../data/todos';

const randomInteger = (min = 1, max = 1000) => {
  const range = max - min;
  const randomNumber = Math.floor(Math.random() * range + min);
  return randomInteger;
};

const randomBoolean = () => Math.random() < 0.5;

export default function UseStateTodos() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState(initialState.slice(0, 5));

  const handleDelete = (todoID, event) => {
    setTodos(todos.filter((_todo) => _todo.id !== todoID));
  };

  const handleCompleted = (todoID) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoID) {
          const newTodo = { ...todo, completed: !todo.completed };
          return newTodo;
        } else {
          return todo;
        }
      }),
    );
  };

  const handleChange = useCallback((e) => setTodo(e.target.value), []);

  useEffect(() => {
    console.log('reRender...');
  }, []);

  return (
    <>
      <section>
        {todos.length}
        <div className='mx-2 space-x-3'>
          <input
            className='border border-sky-500 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            id='todo'
            type='text'
            placeholder='title...'
            value={todo}
            onChange={handleChange}
          />

          <button
            className='bg-sky-500 hover:bg-sky-700 py-2 px-3 rounded-lg'
            onClick={() => {
              setTodos([
                ...todos,
                {
                  userId: todos.length + 1,
                  id: todo.length + 1,
                  title: todo,
                  completed: randomBoolean(),
                },
              ]);
            }}
          >
            add
          </button>
        </div>
        {todos.reverse().map((todo) => (
          <div
            className='flex justify-start align-middle space-x-3'
            key={crypto.randomUUID()}
          >
            <p
              className={`my-1 px-2 rounded-lg mr-2 ${
                todo.completed ? 'line-through' : 'no-underline'
              }`}
            >
              {todo.title}
            </p>

            <button
              className='my-1 px-2 rounded-lg mr-2 bg-slate-100'
              onClick={() => handleCompleted(todo.id)}
            >
              {todo.completed ? 'Completed' : 'Pending'}
            </button>

            <button
              className='border px-2 rounded-lg'
              onClick={handleDelete.bind(this, todo.id)}
            >
              delete
            </button>
          </div>
        ))}
      </section>
    </>
  );
}
