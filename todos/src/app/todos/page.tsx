'use client';

import {
  DocumentIcon,
  EnvelopeIcon,
  TrashIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/solid';

import { useState } from 'react';

import { todos as todosData } from '@/data/todos';

type TodoList = Todo[];
type TodoType = {
  id: number;
  title: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
  important?: boolean;
  planed?: Date;
  reminder?: Date;
  dueDate?: Date;
  attachment?: Blob[];
};

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function TodosHome(props: {}) {
  const [todos, setTodos] = useState<Todo[]>(todosData);

  function createTodo() {
    const currentDate = new Date();
    console.log(currentDate);
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
    <section className='flex flex-col border m-3 min-h-screen'>
      {todos.map((todo: Todo) => {
        return (
          <div key={todo.id}>
            <p key={todo.id}>{todo.title}</p>
            {/* <p>{todo.body}</p> */}
            <div className='flex justify-end items-center'>
              <DocumentIcon
                className='h-5 w-5 text-red-500'
                onClick={createTodo}
              />{' '}
              &nbsp;
              <EnvelopeIcon className='h-5 w-5' /> &nbsp;
              <TrashIcon className='h-5 w-5' /> &nbsp;
              <PencilSquareIcon className='h-5 w-5' />
            </div>
          </div>
        );
      })}
    </section>
  );
}
