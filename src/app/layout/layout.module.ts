import { PoModule } from '@portinari/portinari-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    PoModule,   
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
