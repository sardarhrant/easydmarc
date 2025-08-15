import {Injectable, signal, WritableSignal} from "@angular/core";

@Injectable({providedIn: "root"})
export class StateService {
    private isUserRegistered: WritableSignal<boolean> = signal(false);

    setUserRegistered(registered: boolean) {
        this.isUserRegistered.set(registered);
    }

    get userRegisteredStatus(): boolean {
       return this.isUserRegistered();
    }
}