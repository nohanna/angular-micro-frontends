import { Routes } from '@angular/router';
import { FIRST_APP_ROUTES } from '../app-routing.module';
import { Microfrontend } from '../loader/loader.model';
import { loadRemoteModule } from './federation.utils';

export function buildRoutes(options: Microfrontend[]): Routes {
  const lazyRoutes: Routes = options.map(o => ({
    path: o.routePath,
    loadChildren: () => loadRemoteModule(o).then((m: any) => m[o.ngModuleName]),
  }));

  const routes = [...FIRST_APP_ROUTES, ...lazyRoutes];
  return routes;
}
