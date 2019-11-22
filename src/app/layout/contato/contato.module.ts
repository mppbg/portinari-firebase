import { PoModule } from '@portinari/portinari-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoListComponent } from './contato-list/contato-list.component';
import { ContatoEditComponent } from './contato-edit/contato-edit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContatoListComponent, ContatoEditComponent],
  imports: [
    CommonModule,
    PoModule,
    FormsModule,
    ContatoRoutingModule
  ]
})
export class ContatoModule { }
