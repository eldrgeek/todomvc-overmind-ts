export const changeNewTodoTitle = ({ state }, title) => {
  state.newTodoTitle = title;
};

export const addTodo = ({ state, effects }) => {
  const id = effects.ids.create();

  state.todos[id] = {
    id,
    title: state.newTodoTitle,
    completed: false,
  };

  state.newTodoTitle = '';

  if (state.filter === 'completed') {
    effects.router.goTo('/active');
  }
};

export const toggleTodo = ({ state }, todoId) => {
  state.todos[todoId].completed = !state.todos[todoId].completed;
};

export const toggleAllTodos = ({ state }) => {
  const isAllChecked = state.isAllTodosChecked;

  state.currentTodos.forEach(todo => {
    todo.completed = !isAllChecked;
  });
};

export const removeTodo = ({ state }, todoId) => {
  delete state.todos[todoId];
};

export const clearCompleted = ({ state }) => {
  Object.values(state.todos).forEach(todo => {
    if (todo.completed) {
      delete state.todos[todo.id];
    }
  });
};

export const changeEditingTodoTitle = ({ state }, title) => {
  state.editingTodoTitle = title;
};

export const saveEditingTodoTitle = ({ state }) => {
  if (state.editingTodoTitle) {
    state.todos[state.editingTodoId].title = state.editingTodoTitle;
    state.editingTodoId = null;
  }
};

export const editTodo = ({ state }, todoId) => {
  state.editingTodoId = todoId;
  state.editingTodoTitle = state.todos[todoId].title;
};

export const cancelEditingTodo = ({ state }) => {
  state.editingTodoId = null;
};

export const changeFilter = ({ state }, filter) => {
  state.filter = filter;
};
