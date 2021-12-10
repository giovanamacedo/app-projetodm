import { Component } from '@angular/core';

import { DadosService } from '../dados.service';

import INota from '../interfaces/INota';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public dados: INota[];
  private servico: DadosService;

  constructor(dadosServico: DadosService) {
    this.servico = dadosServico;
    this.dados = this.servico.buscarDados();
    
  }
    remover(indice: number): void {
    this.servico.deletar(indice);
    console.log(this.servico.notas);
  }

}
