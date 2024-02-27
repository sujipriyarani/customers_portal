import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileItem, FileUploader } from 'ng2-file-upload';
import { BsModalRef } from 'ngx-bootstrap/modal';

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
  public uploader: FileUploader = new FileUploader({ url: 'your_upload_url' });
  hasBaseDropZoneOver = false;
  modalRef?: BsModalRef;

  constructor(private fb: FormBuilder) {
    this.CollaboratoryList = ['Customer A', 'Customer B'];
    this.uploader.onBeforeUploadItem = (item: FileItem) => {
      if (this.uploader.queue.length > 1) {
        this.uploader.removeFromQueue(item);
      }
      return true;
    };
  }

  ngOnInit() {
    this.initializeForm();
    this.selectedOption = this.radioOptions[0].id;
  }

  // Form Initialize
  private initializeForm(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
      collaboratory: [null, Validators.required],
      privacy: ['', Validators.required]
    });
    this.form.get('privacy')?.setValue(this.radioOptions[0].id);
  }

  // Form submission
  onSubmit(): void {
    this.submitted = true;

    if (this.form.valid) {
      const formData = this.form.value;
      console.log(formData);
    }
  }

  onRadioChange(optionId: string) {
    this.selectedOption = optionId;
  }


  // File upload
  onFileDropped(event: File[]): void {
    this.addToQueue(event);
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  // Handle file input change
  onFileChange(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const files: File[] = Array.from(fileList);

      // Add files to the ng2-file-upload queue
      this.addToQueue(files);
    }
  }

  private addToQueue(files: File[]): void {
    this.uploader.queue = [];
    for (const file of files) {
      this.uploader.addToQueue([file]);
    }
  }

  uploadItem(item: FileItem): void{
    this.form.get('image')?.setValue(item);
    item.upload();
  }

  removeItem(item: FileItem): void {
    this.form.get('image')?.setValue(null);

    item.remove();
  
    // Manually mark the image form control as touched and check for the required error
    this.form.get('image')?.markAsTouched();
    this.form.get('image')?.updateValueAndValidity();
  }
}
