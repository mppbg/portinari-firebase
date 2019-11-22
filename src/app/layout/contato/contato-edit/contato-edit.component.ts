import { ContatoService } from './../contato.service';
import { Contato } from './../contato';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PoNotificationService } from '@portinari/portinari-ui';


@Component({
  selector: 'app-contato-edit',
  templateUrl: './contato-edit.component.html',
  styleUrls: ['./contato-edit.component.css']
})
export class ContatoEditComponent implements OnInit {

  public contato: Contato;
  private id: string;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private contatoService: ContatoService,
    private poNotificationService: PoNotificationService) {

    this.contato = new Contato();
  }

  ngOnInit() {
    var contato: Contato;
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id != undefined) {
      this.contatoService.get(this.id).then(res => {
        this.contato = res;
      });
    }

  }

  cancel() {
    this.router.navigate(['/contato']);
  }

  save() {
    this.poNotificationService.success('Registro gravado com sucesso');
    this.contatoService.save(this.contato);
    this.cancel();
  }


}
