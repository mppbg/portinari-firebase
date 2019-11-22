import { PoMenuItem } from '@portinari/portinari-ui';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  readonly menus: Array<PoMenuItem> = [
    { label: 'DashBoard', link:'/dashboard'},
    { label: 'Contato', link:'/contato' }
  ];


}
