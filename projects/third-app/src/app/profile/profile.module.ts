import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { SharedModule } from 'projects/shared/src/public-api';
import { NavComponent } from './components/nav/nav.component';


@NgModule({
  declarations: [ProfileComponent, NavComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ],
  exports: [ProfileComponent, NavComponent]
})
export class ProfileModule { }
