import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseModule } from './firebase/firebase.module';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, FirebaseModule],
  exports: [MaterialModule, FirebaseModule]
})
export class SharedModule {}
