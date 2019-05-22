import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/home-page/home-page.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './pages/list-page/list-page.module#ListPageModule'
  },
  {
    path: '',
    loadChildren: './pages/auth-page/auth-page.module#AuthPageModule'
  },

  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
