import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpezarHobbyPageRoutingModule } from './empezar-hobby-routing.module';

import { EmpezarHobbyPage } from './empezar-hobby.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpezarHobbyPageRoutingModule
  ],
  declarations: [EmpezarHobbyPage]
})
export class EmpezarHobbyPageModule {}
