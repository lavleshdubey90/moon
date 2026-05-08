import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {
  contactUsForm = new FormGroup({
    name: new FormControl('', {validators: [Validators.required, Validators.minLength(3), Validators.maxLength(50)]}),
    email: new FormControl('', {validators: [Validators.required, Validators.email]}),
    phone: new FormControl('', {validators: [Validators.required, Validators.pattern(/^\d{10}$/)]}),
    company: new FormControl('', {validators: [Validators.required, Validators.minLength(3), Validators.maxLength(50)]}),
    message: new FormControl('', {validators: [Validators.required, Validators.minLength(10), Validators.maxLength(2000)]}),
  });

  onSubmit() {
    console.log(this.contactUsForm.value);
  }
}
