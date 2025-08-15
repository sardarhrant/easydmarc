import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {StateService} from "../../../services/StateService";
import {StorageService} from "../../../services/storage.service";
import {IUserData} from "../../registration/models/user-data.interface";

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  public readonly stateService: StateService = inject(StateService);
  public readonly storageService: StorageService = inject(StorageService);

  registeredUserData!: Omit<IUserData, 'password' | 'confirm-password'>;

  ngOnInit() {
    this.stateService.setUserRegistered(true);

    const form1Data = this.storageService.getItem('step1-form-data');
    const form2Data = this.storageService.getItem('step2-form-data');
    const form3Data = this.storageService.getItem('step3-form-data');

    this.registeredUserData = {
      ...form1Data,
      ...form2Data,
      ...form3Data,
    };
  }

  canExit() : boolean {

    if (confirm("Do you wish to Please confirm")) {
      return true
    } else {
      return false
    }
  }
}
