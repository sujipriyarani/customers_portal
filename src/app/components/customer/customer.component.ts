import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent {
  form!: FormGroup;
  regionList: any;
  public submitted = false;
  countryList: string[];

  constructor(private fb: FormBuilder, private customerService: CustomerService) { 
    this.regionList = ['Africa', 'Antarctic'];
    this.countryList = ['Zimbabwe', 'Afghanistan']
  }

  ngOnInit(): void {
    this.initForm();
    this.getRegionList();
  }

  // Form initialization
  private initForm(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/
          ),
        ],
      ],
      region: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  // Form submission
  onSubmit(): void {
    console.log('data')
    this.submitted = true;
    if (this.form?.valid) {
      const formData = this.form.value;
      console.log(formData);
    }
  }

  // Get region list
  getRegionList() {
    this.customerService.getRegions().subscribe((res) => {
      this.regionList = Object.values(res.data).map((country:any) => country.region);
      console.log('this.regionList', this.regionList)
    });
  }
}
