import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { observable } from 'rxjs';
import { observeNotification } from 'rxjs/internal/Notification';
import { Cliente } from '../model/Cliente';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../services/produto.service';


@Component({
  selector: 'app-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.css']
})
export class CorpoComponent implements OnInit {

  listaProdutos: Produto[] = [];

  constructor(private nav: Router, private service: ProdutoService) {

  }

  ngOnInit(): void {
    this.service.recuperarProdutos()
  }

  navegar(){
    console.log("cliquei!");
    this.nav.navigate(["/sobre"])
  }

}
