// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { PinComponent } from './components/pin/pin.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        CustomerComponent,
        PinComponent
    ],
    imports: [BrowserModule, ModalModule.forRoot(), ReactiveFormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }

