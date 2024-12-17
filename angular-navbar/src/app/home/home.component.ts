import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  contactForm!: FormGroup;
  name = 'Nathaniel Angelo D. Vergara';
  address = 'San Isidro Village, City of San Fernando, Pampanga';
  showContent = true;
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];  // Array to be displayed using NgFor
  messageFromChild = '';

  formSubmitted = false;
  submissionMessage = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });

    // Load stored data into form if exists
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userDataArray = JSON.parse(storedUserData);
      if (userDataArray.length > 0) {
        const latestUserData = userDataArray[userDataArray.length - 1]; // Get the latest entry
        this.contactForm.setValue({
          firstName: latestUserData.firstName,
          lastName: latestUserData.lastName,
          email: latestUserData.email,
        });
      }
    }
  }

  receiveMessageFromChild(message: string): void {
    this.messageFromChild = message;
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.formSubmitted = true;
      this.submissionMessage = 'Form submitted successfully!';
      console.log('Form Submitted:', this.contactForm.value);

      const userData = localStorage.getItem('userData');
      let userDataArray = userData ? JSON.parse(userData) : [];

      userDataArray.push(this.contactForm.value);
      localStorage.setItem('userData', JSON.stringify(userDataArray));

      console.log('Stored User Data:', localStorage.getItem('userData'));
      this.contactForm.reset();
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill out all required fields correctly.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  }

  removeItem(): void {
    Swal.fire({
      title: 'Success!',
      text: 'You have removed all from the storage!',
      icon: 'success',
      confirmButtonText: 'OK',
    });
    localStorage.removeItem('userData');
  }

  get f() {
    return this.contactForm.controls;
  }

  get firstName() {
    return this.f['firstName'];
  }

  get lastName() {
    return this.f['lastName'];
  }

  get email() {
    return this.f['email'];
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return control ? control.invalid && (control.dirty || control.touched) : false;


  }
}
