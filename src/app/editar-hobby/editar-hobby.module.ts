import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarHobbyPageRoutingModule } from './editar-hobby-routing.module';

import { EditarHobbyPage } from './editar-hobby.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarHobbyPageRoutingModule
  ],
  declarations: [EditarHobbyPage]
})
export class EditarHobbyPageModule {}
