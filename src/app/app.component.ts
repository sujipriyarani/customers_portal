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
  pins: any = [];

  constructor(private modalService: BsModalService) {
    this.pins = [
      {
        "title": "Title1",
        "image": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        "customerList": [
          { "name": "Customer1" },
          { "name": "Customer2" }
        ],
        "privacy": "Private"
      },
      {
        "title": "Title2",
        "image": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        "customerList": [
          { "name": "Customer3" },
          { "name": "Customer4" }
        ],
        "privacy": "Public"
      },
    ]

  }

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
