import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarHobbyPage } from './editar-hobby.page';

const routes: Routes = [
  {
    path: '',
    component: EditarHobbyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarHobbyPageRoutingModule {}
