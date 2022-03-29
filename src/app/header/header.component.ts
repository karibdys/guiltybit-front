import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public logo = "assets/img/guiltybit-logo.png";
  public idioma = "ES";

  public idiomas: Array<string>;

  constructor() {
    this.idiomas=[
      "ES",
      "CA",
      "EN"
    ]
   }

  ngOnInit(): void {
    
  }

  cambiarIdioma(value: string){
    console.log("cambiando a "+value);
    this.idioma = value;
  }

}
