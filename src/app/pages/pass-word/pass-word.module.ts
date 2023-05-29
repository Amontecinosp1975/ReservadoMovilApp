import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassWordPageRoutingModule } from './pass-word-routing.module';

import { PassWordPage } from './pass-word.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassWordPageRoutingModule
  ],
  declarations: [PassWordPage]
})
export class PassWordPageModule {}
