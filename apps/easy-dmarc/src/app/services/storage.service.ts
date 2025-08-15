import {Injectable} from "@angular/core";

@Injectable()
export class StorageService {

    setItem<T>(key: string, value: T): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    getItem<T>(key: string): T | null {
        const item = localStorage.getItem(key);
        return item ? (JSON.parse(item) as T) : null;
    }

    removeItem(key: string): any {
        localStorage.removeItem(key);
    }
}