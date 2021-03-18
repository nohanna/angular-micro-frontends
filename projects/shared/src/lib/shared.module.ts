import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';



@NgModule({
  declarations: [NavbarComponent, SidebarComponent, WrapperComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavbarComponent, SidebarComponent, WrapperComponent]
})
export class SharedModule { }
