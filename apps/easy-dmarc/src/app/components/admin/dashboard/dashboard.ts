import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {StateService} from "../../../services/state.service";
import {StorageService} from "../../../services/storage.service";
import {IUserData} from "../../registration/models/user-data.interface";
import {IStep1FormData} from "../../registration/models/step1-form-data.interface";
import {IStep2FormData} from "../../registration/models/step2-form-data.interface";
import {IStep3FormData} from "../../registration/models/step3-form-data.interface";

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit, OnDestroy {
  public readonly stateService: StateService = inject(StateService);
  public readonly storageService: StorageService = inject(StorageService);

  registeredUserData!: Omit<IUserData, 'password' | 'confirm-password'>;

  ngOnInit() {
    this.stateService.setUserRegistered(true);

    const form1Data = this.storageService.getItem('step1-form-data') as IStep1FormData;
    const form2Data = this.storageService.getItem('step2-form-data') as IStep2FormData;
    const form3Data = this.storageService.getItem('step3-form-data') as IStep3FormData;

    this.registeredUserData = {
      ...form1Data,
      ...form2Data,
      ...form3Data,
    };
  }

  ngOnDestroy() {
    this.stateService.setUserRegistered(false);
  }

  canDeactivate() : boolean {

    if (confirm("Do you wish to Please confirm")) {
      return true
    } else {
      return false
    }
  }
}
