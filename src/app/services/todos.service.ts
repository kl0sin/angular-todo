import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todosCollestion: AngularFirestoreCollection<any>;
  todos: Observable<any>;

  constructor(private angularFirestore: AngularFirestore) {
    this.todosCollestion = angularFirestore.collection<any>('todos');
    this.todos = this.todosCollestion.valueChanges();
  }

  addTodo(todo: any): void {
    const today = new Date();

    const newTodo = { name: todo, created: today, completed: false };

    this.todosCollestion.add(newTodo);
  }
}
