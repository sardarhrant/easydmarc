import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Dashboard} from "../components/admin/dashboard/dashboard";

export interface IDeactivateComponent {
    canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({providedIn: 'root'})
export class DeactivateGuard implements CanDeactivate<Dashboard>
{
    component!: Object;
    route!: ActivatedRouteSnapshot;

    constructor(){
    }

    canDeactivate(component:IDeactivateComponent,
                  route: ActivatedRouteSnapshot,
                  state: RouterStateSnapshot,
                  nextState: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {

        return component.canExit ? component.canExit() : true;
    }

}