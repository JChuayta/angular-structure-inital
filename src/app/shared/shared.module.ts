import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './material/angular-material.module';

const components : any = [
  
];

const modules = [
  FormsModule,
  ReactiveFormsModule,
  CommonModule,
  RouterModule,
  AngularMaterialModule,
];
@NgModule({
  imports: [...components],
  exports: [...components],
  declarations: [...components ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule {}
