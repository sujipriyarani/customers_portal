import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CustomerComponent } from './components/customer/customer.component';
import { PinComponent } from './components/pin/pin.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  bsModalRef: BsModalRef | undefined;

  constructor(private modalService: BsModalService) { }

  // Open customer modal
  openAddCustomerModal() {
    this.bsModalRef = this.modalService.show(CustomerComponent);
  }

  // Open pin modal
  openAddPinModal() {
    const modalConfig = {
      class: 'modal-lg'
    };
    this.bsModalRef = this.modalService.show(PinComponent, modalConfig);

  }
}
