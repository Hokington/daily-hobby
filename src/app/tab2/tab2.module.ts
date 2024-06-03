import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { HobbyCardComponent } from '../components/hobby-card/hobby-card.component';
import { HobbyListComponent } from '../components/hobby-list/hobby-list.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page, HobbyListComponent, HobbyCardComponent]
})

export class Tab2PageModule {}
