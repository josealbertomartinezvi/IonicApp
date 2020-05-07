import { ComponetsModule } from './../../componets/componets.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StarshipsPageRoutingModule } from './starships-routing.module';

import { StarshipsPage } from './starships.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarshipsPageRoutingModule,
    ComponetsModule
  ],
  declarations: [StarshipsPage]
})
export class StarshipsPageModule {}
