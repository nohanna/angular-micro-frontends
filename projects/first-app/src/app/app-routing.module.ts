import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { loadRemoteModule } from './utils/federation.utils';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "profile",
    loadChildren: () =>
      loadRemoteModule({
        remoteName: "profile",
        remoteEntry: "http://localhost:4201/remoteEntry.js",
        exposedModule: "ProfileModule",
      }).then((m) => m.ProfileModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
