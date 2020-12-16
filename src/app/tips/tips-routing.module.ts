import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipsComponent } from './tips.component';

const routes: Routes = [
  {path: 'tips', component: TipsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipsRoutingModule { }
