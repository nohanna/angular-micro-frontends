import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'projects/shared/src/public-api';
import { NavComponent } from './components/nav/nav.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

const DECLARATIONS = [HomeComponent, NavComponent];

@NgModule({
  declarations: DECLARATIONS,
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  exports: DECLARATIONS,
})
export class HomeModule {
  static declarations = DECLARATIONS;
}
