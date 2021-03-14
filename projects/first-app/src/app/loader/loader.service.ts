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
        remoteEntry: "http://localhost:4201/remoteEntry.js",
        remoteName: "secondApp",
        exposedModule: "ProfileModule",
        displayName: "Profile",
        routePath: "profile",
        ngModuleName: "ProfileModule",
      },
      {
        remoteEntry: "http://localhost:4202/remoteEntry.js",
        remoteName: "thirdApp",
        exposedModule: "ProfileModule",
        displayName: "Profile",
        routePath: "profile",
        ngModuleName: "ProfileModule",
      }
    ];
  }
}
