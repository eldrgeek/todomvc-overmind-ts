export const state = {
  filter: 'all',
  newTodoTitle: '',
  todos: {},
  editingTodoId: null,
  editingTodoNewTitle: null,
  currentTodos: ({ todos, filter }) => {
    return Object.values(todos).filter(todo => {
      switch (filter) {
        case 'active':
          return !todo.completed;
        case 'completed':
          return todo.completed;
        default:
          return true;
      }
    });
  },
  activeTodoCount: ({ todos }) => {
    return Object.values(todos).filter(todo => !todo.completed).length;
  },
  hasCompletedTodos: ({ todos }) => {
    return Object.values(todos).some(todo => todo.completed);
  },
  isAllTodosChecked: ({ currentTodos }) => {
    return currentTodos.every(todo => todo.completed);
  },
};
