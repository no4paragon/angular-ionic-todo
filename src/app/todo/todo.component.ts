import { Component } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [TodoService]
})
export class TodoComponent {

  newTodo: Todo = new Todo();

  constructor(private _todoServe: TodoService) {

  }

  addTodo() {
    if (!this.newTodo.title) {
      return;
    }

    this._todoServe.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this._todoServe.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this._todoServe.deleteTodoById(todo.id);
  }

  get todos() {
    return this._todoServe.getAllTodos();
  }

}
