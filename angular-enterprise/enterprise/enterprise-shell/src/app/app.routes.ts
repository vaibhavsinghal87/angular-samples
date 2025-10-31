import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'digital',
        loadComponent: () => loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4201/remoteEntry.js',
            exposedModule: './DigitalApp'
        }).then(m => m.App)
    },
    {
        path: 'platform',
        loadComponent: () => loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4202/remoteEntry.js',
            exposedModule: './PlatformApp'
        }).then(m => m.App)
    },
];
