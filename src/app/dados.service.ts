import { Injectable } from '@angular/core';

import INota from './interfaces/INota';

import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  public notas: INota[] = []
  private storage: Storage;

  constructor(storage: Storage) {
    this.storage = storage;
    this.storage.create().then(() => console.log('Armazenamento criado'));
    this.storage.get('anotacao')
      .then(anotacao => this.notas.push(...anotacao))
      .catch(() => this.storage.set('anotacao', this.notas));
  }

  buscarDados(): INota [] {
    return this.notas;
  }

  salvar(pessoa: INota): void {
    pessoa.id = this.notas.length + 1;
    this.notas.push(pessoa);
    this.storage.set('anotacao', this.notas);
  }

  deletar(indice: number): void {
  this.notas.splice(indice - 1, 1);
  this.atualizarIds();
  this.storage.set('anotacao', this.notas);
}

atualizarIds(): void {
  this.notas.forEach(pessoa => pessoa.id = this.notas.indexOf(pessoa) + 1);
}

}
