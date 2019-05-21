import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
