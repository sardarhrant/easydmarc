import {Component, effect, ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatFormFieldModule} from "@angular/material/form-field";
import {StateService} from "./services/state.service";

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule, MatFormFieldModule, MatSlideToggleModule],
  templateUrl: "./nx-welcome.html",
  styleUrls: ["./nx-welcome.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcome {
  constructor(public stateService: StateService) {
    effect(() => {
      console.log(this.stateService.userRegisteredStatus)
    });
  }
}
