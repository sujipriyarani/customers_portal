// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { PinComponent } from './components/pin/pin.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    PinComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

