import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';

export const FIRST_APP_ROUTES: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "project/:name",
    component: ProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(FIRST_APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
