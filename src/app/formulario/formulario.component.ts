import { Component, OnInit } from '@angular/core';

import { DadosService } from '../dados.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})

export class FormularioComponent implements OnInit {
  public titulo: string;
  public conteudo: string;

  public detalhes: string;
  public servico: DadosService;

  constructor(servico: DadosService) {
    this.servico = servico;
  }

  voltar(): void {
    window.history.back();
  }

  inserir(): void {
    this.servico.salvar({
      titulo: this.titulo,
      conteudo: this.conteudo
    });

    this.voltar();

    console.log(this.servico.notas);
  }
  ngOnInit() {}
}

