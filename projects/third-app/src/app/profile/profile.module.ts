import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { SharedModule } from 'projects/shared/src/public-api';
import { NavComponent } from './components/nav/nav.component';
import { CreationComponent } from './components/creation/creation.component';


@NgModule({
  declarations: [ProfileComponent, NavComponent, CreationComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ],
  exports: [ProfileComponent, NavComponent]
})
export class ProfileModule { }
