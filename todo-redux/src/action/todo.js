import { REMOVE_TODO, ADD_TODO } from "./action-type";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export  const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});
