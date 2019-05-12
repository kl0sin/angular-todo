import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './list-page.component';

const routes: Routes = [
  {
    path: '',
    component: ListPageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListPageRoutingModule {}
