import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipsRoutingModule } from './tips-routing.module';
import { TipsComponent } from './tips.component';


@NgModule({
  declarations: [TipsComponent],
  imports: [
    CommonModule,
    TipsRoutingModule
  ]
})
export class TipsModule { }
