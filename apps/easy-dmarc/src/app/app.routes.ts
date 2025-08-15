import { Route } from '@angular/router';
import {Step1} from "./components/registration/step-1/step-1";
import {Step2} from "./components/registration/step-2/step-2";
import {CanActivateStep2} from "./guards/step-2.guard";
import {CanActivateStep3} from "./guards/step-3.guard";
import {Step3} from "./components/registration/step-3/step-3";
import {Dashboard} from "./components/admin/dashboard/dashboard";
import {AdminGuard} from "./guards/admin.guard";
import {CanDeactivateGuard} from "./guards/can-deactivate.guard";

export const appRoutes: Route[] = [
    { path: '', redirectTo: 'step-1', pathMatch: 'full' },
    { path: 'step-1', component: Step1 },
    { path: 'step-2', component: Step2, canActivate:[CanActivateStep2] },
    { path: 'step-3', component: Step3, canActivate:[CanActivateStep3] },
    { path: 'dashboard', component: Dashboard, canActivate:[AdminGuard], canDeactivate:[CanDeactivateGuard] },
];
