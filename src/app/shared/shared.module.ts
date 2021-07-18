import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { RouterModule } from '@angular/router';
import { RestssrService } from './services/restssr.service';
import { ServerStateInterceptorService } from './services/server-state-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserStateInterceptorService } from './services/browser-state-interceptor.service';
import { LinechartComponent } from './components/charts/linechart/linechart.component';
import { BarchartComponent } from './components/charts/barchart/barchart.component';
import { StackedbarchartComponent } from './components/charts/stackedbarchart/stackedbarchart.component';
import { PiebarchartComponent } from './components/charts/piebarchart/piebarchart.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LinechartComponent,
    BarchartComponent,
    StackedbarchartComponent,
    PiebarchartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    HeaderComponent,
    FooterComponent,
    LinechartComponent,
    BarchartComponent,
    StackedbarchartComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        RestssrService,
        /* { provide: HTTP_INTERCEPTORS, useClass: ServerStateInterceptorService, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: BrowserStateInterceptorService, multi: true } */
      ],
    }
  }
}
