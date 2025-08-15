import {Injectable} from "@angular/core";

@Injectable()
export class StorageService {

    setItem(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    getItem(key: string): any {
        return JSON.parse(localStorage.getItem(key) ?? 'null');
    }
}