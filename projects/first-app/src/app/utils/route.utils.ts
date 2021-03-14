import { Routes } from "@angular/router";
import { Microfrontend } from "../loader/loader.model";
import { loadRemoteModule } from "./federation.utils";
import { FIRST_APP_ROUTES } from "../app-routing.module";


export function buildRoutes(options: Microfrontend[]): Routes {
  const lazyRoutes: Routes = options.map((o) => ({
    path: o.routePath,
    loadChildren: () => loadRemoteModule(o).then((m: any) => m[o.ngModuleName]),
  }));

  const routes = [...FIRST_APP_ROUTES, ...lazyRoutes];
  console.log(`Concatenating lazy routes from remotes`);
  console.log(routes);
  return routes;
}
