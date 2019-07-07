import { Component } from '@angular/core';
import { Todo } from '../../models/todo';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent {
  todoForm: FormGroup;
  todoList: Todo[];

  constructor(private formBuilder: FormBuilder, private todoService: TodosService) {
    this.todoForm = formBuilder.group({
      todo: null
    });

    this.todoService.todos$.subscribe(todos => {
      this.todoList = todos;
    });
  }

  addNewTodo(): void {
    const newTodo = this.todoForm.value.todo;
    this.todoService.addTodo(newTodo);
  }
}
