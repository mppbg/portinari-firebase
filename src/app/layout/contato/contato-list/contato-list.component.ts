import { ContatoService } from './../contato.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PoPageAction, PoTableColumn, PoTableAction, PoNotificationService } from '@portinari/portinari-ui';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-contato-list',
  templateUrl: './contato-list.component.html',
  styleUrls: ['./contato-list.component.css']
})
export class ContatoListComponent implements OnInit {

  readonly actionsPage: Array<PoPageAction> = [{ action: this.novo.bind(this), label: 'Novo' },];

  readonly actions: Array<PoTableAction> = [
    // actions of table here
    { action: this.edit.bind(this), icon: 'po-icon-edit', label: 'Editar' },
    { action: this.delete.bind(this), icon: 'po-icon-delete', label: 'Excluir' }
  ];

  readonly columns: Array<PoTableColumn> = [
    // columns of table here
    { property: 'nome', width: '50%' },
    { property: 'email', width: '30%' },
    { property: 'telefone', width: '20%' }
  ];

  itens: Array<any> = [];



  constructor(private router: Router,
    private contatoService: ContatoService,
    private poNotificationService: PoNotificationService) { }

  ngOnInit() {    
    this.listarContatos();
  }

  private listarContatos() {
    this.contatoService.list().then(res => {
      this.itens = res;
    });
  }

  edit(item) {
    this.router.navigate([`/contato/edit/${item.id}`])
  }

  delete(item) {
    this.contatoService.delete(item).then(
      res => {
        this.poNotificationService.success('Registro excluído com sucesso!')
        this.listarContatos();
      }
    );
    
  }

  novo() {
    this.router.navigate([`/contato/edit`])
  }
}
