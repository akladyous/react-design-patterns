export default function Todo({ todo }) {
  console.log(todo);
  return (
    <div className='bg-white shadow-md rounded-md p-4 mb-4'>
      <h2 className='text-xl font-bold'>{todo.title}</h2>
      <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
      <p>Important: {todo.important ? 'Yes' : 'No'}</p>
      <p>Due Date: {todo.dueDate}</p>
      <p>Repeat: {todo.repeat}</p>
      <p>Remind Me: {todo.remindMe}</p>
      <p>
        Categories:{' '}
        {todo.category.map((category) => (
          <span key={category.id}>{category.name}</span>
        ))}
      </p>
      <p>Created At: {todo.createdAt}</p>
      <p>Updated At: {todo.updatedAt}</p>
    </div>
  );
}
