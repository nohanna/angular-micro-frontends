import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { buildRoutes } from "../utils/route.utils";
import { Microfrontend } from "./loader.model";

@Injectable({
  providedIn: "root"
})
export class MicrofrontendService {
  private microfrontends: Microfrontend[] = [];

  constructor(private router: Router) {}

  initialise(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.microfrontends = this.loadConfig();
      this.router.resetConfig(buildRoutes(this.microfrontends));
      resolve();
    });
  }

  loadConfig(): Microfrontend[] {
    return [
      {
        // For Loading
        remoteEntry: "http://localhost:4201/remoteEntry.js",
        remoteName: "profile",
        exposedModule: "ProfileModule",

        // For Routing, enabling us to ngFor over the microfrontends and dynamically create links for the routes
        displayName: "Profile",
        routePath: "profile",
        ngModuleName: "ProfileModule",
      },
    ];
  }
}
