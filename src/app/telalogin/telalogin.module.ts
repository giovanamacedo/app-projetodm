import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaloginPageRoutingModule } from './telalogin-routing.module';

import { TelaloginPage } from './telalogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaloginPageRoutingModule
  ],
  declarations: [TelaloginPage]
})
export class TelaloginPageModule {}
