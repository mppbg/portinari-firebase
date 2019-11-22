import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoListComponent } from './contato-list/contato-list.component';
import { ContatoEditComponent } from './contato-edit/contato-edit.component';


const routes: Routes = [{ path: '', component: ContatoListComponent },
                        { path: 'edit', component: ContatoEditComponent },
                        { path: 'edit/:id', component: ContatoEditComponent }
                       ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatoRoutingModule { }
