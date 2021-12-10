import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaloginPage } from './telalogin.page';

const routes: Routes = [
  {
    path: '',
    component: TelaloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaloginPageRoutingModule {}
