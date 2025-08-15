import {Component, inject, OnInit} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatOption, MatSelect} from "@angular/material/select";
import {StorageService} from "../../../services/storage.service";
import {Router} from "@angular/router";
import {StateService} from "../../../services/state.service";
import {RoleType} from "../enums/role-type.enum";
import {IndustryType} from "../enums/industry-type.enum";

@Component({
  selector: 'app-step-2',
  imports: [CommonModule, FormsModule, MatInput, MatLabel, ReactiveFormsModule, MatFormField, MatSelect, MatOption],
  providers:[StorageService],
  templateUrl: './step-2.html',
  styleUrl: './step-2.css',
})
export class Step2 implements OnInit {
  form = new FormGroup({
    "industry": new FormControl("", [Validators.required]),
    "experienceInYears": new FormControl("", [Validators.required, Validators.min(1), Validators.max(50),]),
    "yourRole": new FormControl("", [Validators.required]),
  });

  private router = inject(Router);
  private location = inject(Location);
  private storageService = inject(StorageService);
  private stateService = inject(StateService);

  industryTypes = [
    {
      value: IndustryType.Marketing,
      name: 'Marketing'
    },
    {
      value: IndustryType.IT,
      name: 'It'
    },
    {
      value: IndustryType.Financial_Services,
      name: 'Financial Services'
    },
  ]
  roles: {value: string; name: string}[] =  [
    {
      value: RoleType.Developer,
      name: 'Developer'
    },
    {
      value: RoleType.Designer,
      name: 'Designer'
    },
    {
      value: RoleType.Manager,
      name: 'Manager'
    }];

  ngOnInit(): void {
    this.stateService.setUserRegistered(false);
    const step2FormData = this.storageService.getItem("step2-form-data");

    if(step2FormData) {
      this.form.patchValue({...step2FormData});
    }
  }

  onSubmit() {
      if(this.form.valid) {
        this.storageService.setItem('step2-Passed', true);
        this.storageService.setItem('step2-form-data', this.form.value);

        this.router.navigate(['/step-3'], {});
      }
  }

  goToBack() {
    this.router.navigate(['/step-1'], {})
  }

  get isExperienceInYearsHasError () {
    return this.form.get('experienceInYears')?.hasError('max') && this.form.get('experienceInYears')?.touched;
  }

  get isExperienceInYearsHasErrorRequired () {
    return this.form.get('experienceInYears')?.hasError('required') && this.form.get('experienceInYears')?.touched;
  }
}
