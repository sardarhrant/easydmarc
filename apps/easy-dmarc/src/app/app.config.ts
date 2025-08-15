import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {CanActivateStep2} from "./guards/step-2.guard";
import {CanActivateStep3} from "./guards/step-3.guard";
import {StorageService} from "./services/storage.service";
import {AdminGuard} from "./guards/admin.guard";
import {CanDeactivateGuard} from "./guards/can-deactivate.guard";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    CanActivateStep2,
    CanActivateStep3,
    CanDeactivateGuard,
    AdminGuard,
    StorageService
  ],
};
