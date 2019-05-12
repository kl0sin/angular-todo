import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { ListPageModule } from './pages/list-page/list-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule, ListPageModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
