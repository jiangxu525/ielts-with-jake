import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task1RoutingModule } from './task1-routing.module';
import { Task1Component } from './task1.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [Task1Component],
  imports: [
    CommonModule,
    Task1RoutingModule,
    SharedModule
  ]
})
export class Task1Module { }
