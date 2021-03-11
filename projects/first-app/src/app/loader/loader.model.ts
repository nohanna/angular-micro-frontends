import { LoadRemoteModuleOptions } from "../utils/federation.utils";

export type Microfrontend = LoadRemoteModuleOptions & {
  displayName: string;
  routePath: string;
  ngModuleName: string;
};

export interface Remote {
  remoteEntry: string;
  remoteName: string;
  exposedModule: string;
  componentName: string;
}
