import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';


const MAT_SNACKBAR_GLOBAL_CONFIG = {
  duration: 2500,
  verticalPosition: 'bottom',
  horizontalPosition: 'center'
}

const MATERIAL_MODULES = [
  MatIconModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatDividerModule,
  MatInputModule,
  MatButtonModule,
  MatSnackBarModule,
  MatDividerModule,
  MatDialogModule
]

@NgModule({
  exports: [...MATERIAL_MODULES],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: MAT_SNACKBAR_GLOBAL_CONFIG }
  ]
})
export class MaterialModule { }
