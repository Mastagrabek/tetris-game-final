import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

const MATERIAL_MODULES = [
  MatIconModule,
  MatToolbarModule,
]

@NgModule({
  exports: [...MATERIAL_MODULES],
})
export class MaterialModule { }
