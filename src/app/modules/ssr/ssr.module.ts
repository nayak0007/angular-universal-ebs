import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SsrRoutingModule } from './ssr-routing.module';
import { SsrComponent } from './ssr.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    SsrComponent
  ],
  imports: [
    CommonModule,
    SsrRoutingModule,
    SharedModule
  ]
})
export class SsrModule { }
