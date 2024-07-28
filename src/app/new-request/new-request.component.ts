import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrl: './new-request.component.scss'
})
export class NewRequestComponent {
  formData = {
    vmName: '',
    description: '',
    os: '',
    envType: '',
    startDate: '',
    softwareList: '',
    ram: '',
    vcpus: '',
    diskSpace: '',
    openPorts: '',
    hasPublicIP: ''
  };

  successMessage: string | null = null;

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Handle form submission here
      console.log('Form Value:', this.formData);

      // Set the success message
      this.successMessage = 'Request submitted with success and is under review by our admins';

      // Clear the form
      form.resetForm();

      // Hide the success message after 3 seconds
      setTimeout(() => {
        this.successMessage = null;
      }, 3000);
    } else {
      console.log('Form is invalid');
    }
  }

}
