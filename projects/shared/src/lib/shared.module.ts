import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [SharedComponent, NavbarComponent, SidebarComponent],
  imports: [
  ],
  exports: [SharedComponent, NavbarComponent, SidebarComponent]
})
export class SharedModule { }
