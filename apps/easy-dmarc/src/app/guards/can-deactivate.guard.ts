import {Injectable} from "@angular/core";
import {CanDeactivate, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

type CanDeactivateType = Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;

export interface CanComponentDeactivate {
    canDeactivate: () => CanDeactivateType;
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(
        component: CanComponentDeactivate): CanDeactivateType {

        return component.canDeactivate ? component.canDeactivate() : true;
    }

}