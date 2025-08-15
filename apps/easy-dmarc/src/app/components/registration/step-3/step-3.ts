import {Component, inject, OnInit} from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatLabel} from "@angular/material/input";
import {CdkTextareaAutosize} from "@angular/cdk/text-field";
import {Router} from "@angular/router";
import {StorageService} from "../../../services/storage.service";
import {StateService} from "../../../services/state.service";

@Component({
  selector: 'app-step-3',
  imports: [CommonModule, FormsModule, MatLabel, CdkTextareaAutosize, ReactiveFormsModule],
  templateUrl: './step-3.html',
  styleUrl: './step-3.css',
})
export class Step3 implements OnInit {
  form = new FormGroup({
    "aboutUs": new FormControl("", [Validators.maxLength(255)]),
  });

  leftCharacters!: string;

  private router = inject(Router);
  private location = inject(Location);
  private storageService = inject(StorageService);
  private stateService = inject(StateService);

  ngOnInit(): void {
    this.stateService.setUserRegistered(false);
    const step3FormData = this.storageService.getItem("step3-form-data");

    if(step3FormData) {
      this.form.patchValue({...step3FormData});
    }
  }

  onSubmit() {
    if(this.form.valid) {
      this.storageService.setItem('registration_success', true);
      this.storageService.setItem('step3-form-data', this.form.value);

      this.router.navigate(['/dashboard'], {});
    }
  }

  goToBack() {
    this.router.navigate(['/step-2'], {})
  }

  get isABoutUsHasErrorMaxLength () {
    const minLengthError = this.form.get('password')?.errors?.['minlength'];
    const actualLength = minLengthError?.actualLength;
    const requiredLength = minLengthError?.requiredLength;

    this.leftCharacters = (requiredLength - actualLength) > 0 ?  `Left ${requiredLength - actualLength} characters` : '';
    return this.form.get('aboutUs')?.hasError('maxlength') && this.form.get('aboutUs')?.touched && !!this.form.get('aboutUs')?.value;
  }
}
