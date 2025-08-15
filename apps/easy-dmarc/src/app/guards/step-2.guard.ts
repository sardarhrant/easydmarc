
import {inject, Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {StorageService} from "../services/storage.service";


@Injectable()
export class CanActivateStep2 implements CanActivate {

    private storageService = inject(StorageService);

    canActivate(): boolean {
        const isStep1Passed = this.storageService.getItem('step1-Passed');

        if (isStep1Passed)  {
            return true;
        }
        return false;
    }
}