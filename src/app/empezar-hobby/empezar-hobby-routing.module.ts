import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpezarHobbyPage } from './empezar-hobby.page';

const routes: Routes = [
  {
    path: '',
    component: EmpezarHobbyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpezarHobbyPageRoutingModule {}
