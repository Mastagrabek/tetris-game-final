import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';

const MATERIAL_MODULES = [
  MatIconModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatDividerModule,
]

@NgModule({
  exports: [...MATERIAL_MODULES],
})
export class MaterialModule { }
