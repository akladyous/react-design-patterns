const todoTitles = [
  'Buy groceries',
  'Clean the house',
  'Go for a run',
  'Read a book',
  'Write an article',
  'Attend a meeting',
  'Call a friend',
  'Pay the bills',
  'Walk the dog',
  'Prepare dinner',
  'Finish a project',
  'Exercise',
  'Study for an exam',
  'Schedule appointments',
  'Watch a movie',
  'Take a break',
  'Organize files',
  'Start a new hobby',
  'Plan a trip',
  'Repair something',
  'Listen to music',
  'Do laundry',
  'Send emails',
  'Learn something new',
  'Volunteer',
  'Spend time with family',
  'Review documents',
  'Visit a museum',
  'Practice meditation',
  'Create a budget',
  'Explore new places',
  'Fix a computer issue',
  'Plant a garden',
  'Take a nap',
  'Attend a concert',
  'Update social media',
  'Try a new recipe',
  'Paint a picture',
  'Help someone in need',
  'Go to the gym',
  'Write a to-do list',
  'Relax and unwind',
  'Explore nature',
  'Take photographs',
  'Support a local business',
  'Learn a musical instrument',
  'Start a journal',
  'Clean up clutter',
  'Play a board game',
  'Go on a bike ride',
];
export const todosCategory = [
  {
    id: 1,
    name: 'Personal',
  },
  {
    id: 2,
    name: 'Work',
  },
  {
    id: 3,
    name: 'Home',
  },
  {
    id: 4,
    name: 'Health',
  },
  {
    id: 5,
    name: 'Education',
  },
  {
    id: 6,
    name: 'Finance',
  },
  {
    id: 7,
    name: 'Social',
  },
  {
    id: 8,
    name: 'Travel',
  },
  {
    id: 9,
    name: 'Shopping',
  },
  {
    id: 10,
    name: 'Miscellaneous',
  },
];
export function todosData() {
  const todos = [];
  const categoryCount = todosCategory.length;

  for (let i = 1; i <= 50; i++) {
    const todoCategories = [];
    const randomCategoryCount = Math.floor(Math.random() * 3) + 1; // Random number between 1 and 3

    for (let j = 0; j < randomCategoryCount; j++) {
      const randomCategoryIndex = Math.floor(Math.random() * categoryCount);
      const randomCategory = todosCategory[randomCategoryIndex];
      todoCategories.push(randomCategory);
    }

    const todo = {
      userId: i,
      id: i,
      title: todoTitles[i % todoTitles.length],
      completed: false,
      important: false,
      dueDate: '',
      repeat: '',
      remindMe: false,
      category: todoCategories,
    };

    todos.push(todo);
  }

  return todos;
}

console.log(JSON.stringify(todosData(), null, 2));
