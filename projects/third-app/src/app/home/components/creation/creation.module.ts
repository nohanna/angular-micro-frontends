import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'projects/shared/src/public-api';
import { CreationRoutingModule } from './creation-routing.module';
import { CreationComponent } from './creation.component';

@NgModule({
  declarations: [CreationComponent],
  imports: [CommonModule, CreationRoutingModule, SharedModule],
})
export class CreationModule {}
