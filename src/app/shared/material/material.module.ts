import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatListModule, MatIconModule],
  exports: [MatButtonModule, MatListModule, MatIconModule]
})
export class MaterialModule {}
