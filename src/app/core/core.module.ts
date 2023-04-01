import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { NavbarComponent } from './components/navbar/navbar.component';


const components: any = [
  BodyComponent,
  NavbarComponent
];

const modules: any = [
  FormsModule,
  ReactiveFormsModule,
  CommonModule,
  RouterModule
];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...modules, ...components],
  providers: [],
})
export class CoreModule {}
