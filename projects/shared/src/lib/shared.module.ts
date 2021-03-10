import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [NavbarComponent, SidebarComponent],
  imports: [
  ],
  exports: [NavbarComponent, SidebarComponent]
})
export class SharedModule { }
