import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {AuthGuardStep2} from "./guards/step-2.guard";
import {AuthGuardStep3} from "./guards/step-3.guard";
import {StorageService} from "./services/storage.service";
import {AdminGuard} from "./guards/admin.guard";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    AuthGuardStep2,
    AuthGuardStep3,
    AdminGuard,
    StorageService
  ],
};
