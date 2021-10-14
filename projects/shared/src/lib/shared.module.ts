import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { PrefixPipe } from './pipes/prefix.pipe';

@NgModule({
  declarations: [NavbarComponent, SidebarComponent, WrapperComponent, PrefixPipe],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, SidebarComponent, WrapperComponent],
  providers: [PrefixPipe],
})
export class SharedModule {}
