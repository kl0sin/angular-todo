import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';

const fireBaseConfig = {};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    AngularFireModule.initializeApp(fireBaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ]
})
export class FirebaseModule {}
