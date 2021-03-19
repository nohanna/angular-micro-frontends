import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'projects/shared/src/public-api';
import { NavComponent } from './components/nav/nav.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, NavComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  exports: [HomeComponent, NavComponent],
})
export class HomeModule {}
