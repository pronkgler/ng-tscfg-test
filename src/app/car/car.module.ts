import { ContentModule } from './../content/content.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JaguarComponent } from './jaguar/jaguar.component';
import { MercedesComponent } from './mercedes/mercedes.component';
import { PolskiFiatComponent } from './polski-fiat/polski-fiat.component';




@NgModule({
  declarations: [
    JaguarComponent,
    MercedesComponent,
    PolskiFiatComponent,
  ],
  imports: [
    CommonModule,

    ContentModule,
  ],
  exports: [
    JaguarComponent,
    MercedesComponent,
    PolskiFiatComponent,
  ]
})
export class CarModule { }
