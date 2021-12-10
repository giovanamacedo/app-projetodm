import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import INota from '../interfaces/INota';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-detalhes', 
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {
  public rota: ActivatedRoute;
  public id: number;
  public dados: INota[];
  public pessoa: INota;
  private servico: DadosService;


  constructor(route: ActivatedRoute, dadosServico: DadosService) {
    this.rota = route;
    this.servico = dadosServico;
    this.dados = this.servico.buscarDados();  }

  ngOnInit() { 
    //recupera o parâmetro id presente na URL.
    this.id = Number(this.rota.snapshot.paramMap.get('id'));

    /*Busca detro do array o objeto com o id dentro da classe igual o atributo id*/
    this.pessoa = this.dados.find(p => p.id === this.id);
  }

}
