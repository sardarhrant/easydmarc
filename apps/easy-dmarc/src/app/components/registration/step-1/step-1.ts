import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {confirmPasswordValidator} from "./validators/confirm-password.validator";
import {Router} from "@angular/router";
import {StorageService} from "../../../services/storage.service";
import {StateService} from "../../../services/StateService";

@Component({
  selector: 'app-step-1',
  imports: [CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  providers: [StorageService],
  templateUrl: './step-1.html',
  styleUrl: './step-1.css',
})

export class Step1 implements OnInit {
  private router = inject(Router);
  private storageService = inject(StorageService);
  private stateService = inject(StateService);

  form: FormGroup<{
    "email": FormControl<string | null> ,
    "password": FormControl<string | null> ,
    "confirm-password": FormControl<string | null>
  }> = new FormGroup({
    "email": new FormControl("", [Validators.required, Validators.email]),
    "password": new FormControl("", [Validators.required, Validators.minLength(6)]),
    "confirm-password": new FormControl("", [Validators.required, Validators.minLength(6)]),
  },  { validators: confirmPasswordValidator });

  leftCharacters!: string;

  ngOnInit(): void {
    this.stateService.setUserRegistered(false);
    const step1FormData = this.storageService.getItem("step1-form-data");

    if(step1FormData) {
      this.form.patchValue({...step1FormData});
    }
  }

  onSubmit(): void {
    if(this.form.valid) {
      this.storageService.setItem('step1-Passed', true);
      this.storageService.setItem('step1-form-data', this.form.value);

      this.router.navigate(['/step-2'], {});
    }
  }

  get isEmailHasErrorRequired (): boolean | undefined {
    return this.form.get('email')?.hasError('required') && this.form.get('email')?.touched;
  }

  get isEmailHasErrorValid (): boolean | undefined {
    return this.form.get('email')?.hasError('email') && this.form.get('email')?.touched;
  }

  get isPasswordHasErrorRequired (): boolean | undefined {
    return this.form.get('password')?.hasError('required') && this.form.get('password')?.touched;
  }

  get isPasswordHasErrorMinLength (): boolean | undefined {
    const minLengthError = this.form.get('password')?.errors?.['minlength'];
    const actualLength = minLengthError?.actualLength;
    const requiredLength = minLengthError?.requiredLength;

    this.leftCharacters = (requiredLength - actualLength) > 0 ?  `Left ${requiredLength - actualLength} characters` : '';
    return this.form.get('password')?.hasError('minlength') && this.form.get('password')?.touched && !!this.form.get('password')?.value;
  }

  get isPasswordmatchHasError (): boolean {
    return this.form.hasError('PasswordNoMatch') && this.form.touched;
  }
}
