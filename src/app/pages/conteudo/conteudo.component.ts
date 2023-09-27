import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {
  private id:string | null = "0"

  conteudo_imagem:string = "";
  conteudo_titulo:string = "";
  conteudo_descricao:string = "";

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => this.id = value.get("id"))
    this.setValores(this.id)

  }

  setValores(id:string | null){
    const resultado = dataFake.filter(artigo => artigo.id == id)[0]
    this.conteudo_imagem = resultado.photo;
    this.conteudo_descricao = resultado.description;
    this.conteudo_titulo = resultado.title;

  }


}
