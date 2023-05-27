'use client';
import {
  DocumentIcon,
  EnvelopeIcon,
  TrashIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/solid';

import { useState } from 'react';

type Todo = {
  id: number;
  title: string;
  body: string;
  createdAt: Date;
};

export default function TodosHome(props: {}) {
  const [todos, setTodos] = useState<Todo[]>([]);

  function createTodo(): void | undefined {
    const currentDate = new Date();
    return undefined;
  }
  function readTodo(): Todo | undefined {
    return undefined;
  }
  function updatgeTodo(): boolean {
    return true;
  }
  function deleteTodo(todo: Todo): void {}

  const todoActions = {};

  return (
    <section className='flex flex-col'>
      {todos.map((todo: Todo) => {
        return (
          <>
            <title key={todo.id}>{todo.title}</title>
            <p>{todo.body}</p>
            <div className='flex justify-end items-center'>
              <DocumentIcon onClick={createTodo()} /> &nbsp;
              <EnvelopeIcon /> &nbsp;
              <TrashIcon /> &nbsp;
              <PencilSquareIcon />
            </div>
          </>
        );
      })}
    </section>
  );
}
