import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

const fireBaseConfig = {
  apiKey: 'AIzaSyBdqjzsxixWc1uQb6X6L2_P_uITUFaZeQ8',
  authDomain: 'playground-angular-todo-list.firebaseapp.com',
  databaseURL: 'https://playground-angular-todo-list.firebaseio.com',
  projectId: 'playground-angular-todo-list',
  storageBucket: 'playground-angular-todo-list.appspot.com',
  messagingSenderId: '481674144154',
  appId: '1:481674144154:web:dc6303fafe82a1b4'
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(fireBaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ]
})
export class FirebaseModule {}
