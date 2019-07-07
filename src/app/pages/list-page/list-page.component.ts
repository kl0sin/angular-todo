import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  todoForm: FormGroup;

  todoList: Todo[] = [
    {
      name: 'Note no1 ',
      created: new Date('05/01/19'),
      completed: true
    },
    {
      name: 'Note no2',
      created: new Date('05/02/19'),
      completed: false
    },
    {
      name: 'Note no3',
      created: new Date('05/03/19'),
      completed: false
    }
  ];

  constructor(private formBuilder: FormBuilder, private todoService: TodosService) {
    this.todoForm = formBuilder.group({
      todo: null
    });
  }

  ngOnInit(): void {}

  addNewTodo(): void {
    console.log('addNewTodo');
    const newTodo = this.todoForm.value;
    console.log(newTodo);
    this.todoService.addTodo(newTodo);
  }
}
