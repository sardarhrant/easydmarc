import { Route } from '@angular/router';
import {Step1} from "./components/registration/step-1/step-1";
import {Step2} from "./components/registration/step-2/step-2";
import {AuthGuardStep2} from "./guards/step-2.guard";
import {AuthGuardStep3} from "./guards/step-3.guard";
import {Step3} from "./components/registration/step-3/step-3";
import {Dashboard} from "./components/admin/dashboard/dashboard";
import {AdminGuard} from "./guards/admin.guard";
import {DeactivateGuard} from "./guards/can-deactivate.guard";

export const appRoutes: Route[] = [
    { path: '', component: Step1 },
    { path: 'step-2', component: Step2, canActivate:[AuthGuardStep2] },
    { path: 'step-3', component: Step3, canActivate:[AuthGuardStep3] },
    { path: 'dashboard', component: Dashboard, canActivate:[AdminGuard], canDeactivate:[DeactivateGuard] },
];
