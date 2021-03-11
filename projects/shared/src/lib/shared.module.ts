import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [NavbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    Router
  ],
  exports: [NavbarComponent, SidebarComponent]
})
export class SharedModule { }
