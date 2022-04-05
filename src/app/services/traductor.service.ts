import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraductorService {

  private idioma="";
  private idiomasDisponibles: Array<string>;
  private textos = {
    general:{
      buscador: ""
    },
    menu:{
      inicio: "",
      noticias: "",
      analisis: "",
      avances: "",
      guias: ""
    }
  }

  private idioma$ = new Subject<string>();

  constructor() {
    this.idiomasDisponibles= [
      'ES',
      'CA',
      'EN'
    ];
    if (localStorage.getItem("idioma")){
      let idioma = localStorage.getItem('idioma');  
      this.setIdioma(idioma!);
    }else{
      this.setIdioma('ES');
    }
  }


  /*********************************************************
                CONFIGURACIÓN IDIOMAS
   *********************************************************/
  getIdioma(){
    return this.idioma;
  }

  getIdioma$(){
    return this.idioma$.asObservable();
  }
  
  //establece el idioma de la web entre los disponibles. Si el idioma indicado no está disponible, pone el español por defecto
  setIdioma(idioma: string){
    localStorage.setItem("idioma", idioma);
    switch(idioma.toUpperCase()){
      case 'ES':
        this.idioma='ES';
        this.setES();
        break;
      case 'CA':
        this.idioma='CA';
        this.setCA();
        break;
      case 'EN':
        this.idioma='EN';
        this.setEN();
        break;
      default:
        this.idioma='ES';
        this.setES();
    }   
    this.idioma$.next(this.idioma);
  }

  getIdiomasDisponibles(){
    return this.idiomasDisponibles;
  }

  getTextos(){
    return this.textos;
  }

  /*********************************************************
                        TRADUCTOR
   *********************************************************/
  setES(){
    localStorage.setItem("idioma", "ES");
    this.textos.general.buscador="Buscador";

    this.textos.menu.inicio="Inicio";
    this.textos.menu.noticias="Noticias";
    this.textos.menu.analisis="Análisis";
    this.textos.menu.avances="Avances";
    this.textos.menu.guias="Guías";
  }

  setCA(){
    localStorage.setItem("idioma", "CA");
    this.textos.general.buscador="Cercador";

    this.textos.menu.inicio="Inici";
    this.textos.menu.noticias="Noticies";
    this.textos.menu.analisis="Anàlisis";
    this.textos.menu.avances="Avanços";
    this.textos.menu.guias="Guíes";
  }

  setEN(){
    localStorage.setItem("idioma", "EN");
    this.textos.general.buscador="Search";

    this.textos.menu.inicio="Home";
    this.textos.menu.noticias="News";
    this.textos.menu.analisis="Reviews";
    this.textos.menu.avances="Previews";
    this.textos.menu.guias="Guides";
  }
  

}
