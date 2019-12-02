import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadingComponent } from './reading/reading.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ReadingService } from "./reading/reading.service";
import { BasicAuthInterceptor } from "./_helpers/basic-auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    ReadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    ReadingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
