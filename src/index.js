import { saludar, crearTodoHtml } from './js/componentes.js';

import {Todo, TodoList} from './classes' // busca el index.js por defecto
// import { Todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class.js';

import './styles.css';

export const todoList = new TodoList();

// const tarea = new Todo('Aprender JavaScript');
// todoList.nuevoTodo(tarea);

// // tarea.completado = true

// console.log(todoList);

// crearTodoHtml(tarea); 

todoList.todos.forEach(todo => crearTodoHtml(todo));
