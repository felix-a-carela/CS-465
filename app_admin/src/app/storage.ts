// app_admin/src/app/storage.ts

import { InjectionToken } from '@angular/core';

export const BROWSER_STORAGE = new
    InjectionToken<Storage>('Browser Storage', {
    providedIn: 'root',
    factory: () => localStorage
    });

export class Storage {
}
