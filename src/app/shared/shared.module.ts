import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseModule } from './firebase/firebase.module';
import { MaterialModule } from './material/material.module';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, MaterialModule, FirebaseModule, ReactiveFormsModule],
  exports: [MaterialModule, FirebaseModule, FormComponent, ReactiveFormsModule]
})
export class SharedModule {}
