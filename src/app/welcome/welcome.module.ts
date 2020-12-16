import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { WelcomeComponent } from './welcome.component';
import { CategoryCardComponent } from './category-card/category-card.component';

@NgModule({

  declarations: [WelcomeComponent, CategoryCardComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
