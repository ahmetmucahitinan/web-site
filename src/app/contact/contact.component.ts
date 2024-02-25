import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ContactModel } from '../models/contact-form.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(private _router: Router,) { }
  contactForm = new FormGroup(
    {
      fullName: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(30)]), 
      email: new FormControl("", [Validators.required, Validators.minLength(5), Validators.email]),
      subject: new FormControl("", [Validators.required, Validators.minLength(5),]),
      message: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(1000)]),
    }
  )
      ngOnInit() {
      
      }
      public getFormNameInvalid(formName: string): boolean | undefined {
        return this.contactForm.get(formName)?.invalid;
      }   
  getErrorMessage(formName: string) {
    if (this._getRegisterForm(formName, "required")) {
      return 'Zorunlu alan';
    } else if (this._getRegisterForm(formName, "minlength")) {
      return "Minimum karakter sayısını geçiniz";
    } else if (this._getRegisterForm(formName, "email")) {
      return "Geçerli değer giriniz";
    } else if (this._getRegisterForm(formName, "maxlength")) {
      return "Maximum karakter sayısını geçmeyiniz";
    } else return "";
  }  
  private _getRegisterForm(formData: string, errorType: string) {
    return this.contactForm.get(formData)?.hasError(errorType);
  }

  isDisableForFormGroup(): boolean {
    return !this.contactForm.valid;
  }
  submit() {
    console.log('Form gönderildi:', this.contactForm);
    // Formu sıfırla
  }
}