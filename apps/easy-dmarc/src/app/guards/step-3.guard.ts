import {inject, Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {StorageService} from "../services/storage.service";


@Injectable()
export class AuthGuardStep3 implements CanActivate {

    private storageService = inject(StorageService);

    canActivate(): boolean {
        const isStep2Passed = this.storageService.getItem('step2-Passed');

        if (isStep2Passed)  {
            return true;
        }
        return false;
    }
}