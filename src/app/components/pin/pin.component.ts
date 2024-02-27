import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrl: './pin.component.scss'
})
export class PinComponent {
  form!: FormGroup;
  CollaboratoryList: any; // Define the type of CollaboratoryList
  submitted = false;
  radioOptions = [
    { id: '1', label: 'Private', checked: true },
    { id: '2', label: 'Public' }
  ];
  selectedOption: string | undefined;

  constructor(private fb: FormBuilder) { 
    this.CollaboratoryList = ['Customer A', 'Customer B']
  }

  ngOnInit() {
    this.initializeForm();
    this.selectedOption = this.radioOptions[0].id;
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
      collaboratory: [null, Validators.required],
      privacy: ['', Validators.required]
    });

    // You can set the default value for the radio button here
    // For example, set the default value to the id of the first option
    this.form.get('privacy')?.setValue(this.radioOptions[0].id);
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.valid) {
      const formData = this.form.value;
      console.log(formData);

      // Perform further actions like submitting the form data to a service
    }
  }

  onRadioChange(optionId: string) {
    this.selectedOption = optionId;
  }
}
