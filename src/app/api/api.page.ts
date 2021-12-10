import { Component, OnInit } from '@angular/core';

interface IProduct {
  id?: number;
  name: string;
  conteudo: string;
}

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  public url = 'http://localhost:3333/products';
  public products: IProduct[] = [];
  public id: number;
  public name: string;
  public conteudo: string;

  constructor() { 
    this.buscar();
  }

  async buscar(): Promise<void> {
    const resposta = await fetch(this.url);
    this.products = await resposta.json();
  }

  //GET
  async buscarPorId(id: number): Promise<void> {
    const resposta = await fetch(`${this.url}/${id}`);
    const product: IProduct = await resposta.json();

    this.name = product.name;
    this.conteudo = product.conteudo;
  }

  //POST - faz a alteração na API
  async salvar(): Promise<void> {
    const novo = {
      name: this.name,
      conteudo: this.conteudo
    };

    console.log(Object.keys(novo));
    //console.log(novo['conteudo']);

    //name=MEGA&conteudo=300
    const body = Object.keys(novo)
      .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(novo[k])}`)
      .join('&');

    await fetch(this.url, { method: 'POST', body: new URLSearchParams(body) });
    this.buscar();
  }

  //PUT
  async atualizar(id: number): Promise<void> {
    const produtoAtualizado = {
      name: this.name,
      conteudo: this.conteudo
    };

    const body = Object.keys(produtoAtualizado)
      .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(produtoAtualizado[k])}`)
      .join('&');

    await fetch(`${this.url}/${id}`, { method: 'PUT', body: new URLSearchParams(body) });
    this.buscar();
  }

  //DELETE
  async remover(id: number): Promise<void> {
    await fetch(`${this.url}/${id}`, { method: 'DELETE' });
    this.buscar();
  }

  ngOnInit() {
  }

}
