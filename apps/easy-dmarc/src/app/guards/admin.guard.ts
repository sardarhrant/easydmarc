import {inject, Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {StorageService} from "../services/storage.service";


@Injectable()
export class AdminGuard implements CanActivate {

    private storageService = inject(StorageService);

    canActivate(): boolean {
        const isRegistered = this.storageService.getItem('registration_success');

        if (isRegistered)  {
            return true;
        }
        return false;
    }
}