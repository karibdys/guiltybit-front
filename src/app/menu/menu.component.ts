import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TraductorService } from '../services/traductor.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public idioma: string | undefined;
  public idioma$: Observable<string>;
  public idiomas: Array<string>;
  public traduc: any;

  public menuOpciones: Array<any> | undefined;

  constructor(
    public tService: TraductorService
  ) {
    this.idioma$ = this.tService.getIdioma$();
    this.idioma$.subscribe(
      () => {
        this.idioma = tService.getIdioma();
        this.traduc = tService.getTextos();

        this.menuOpciones=[
          {
            nom: this.traduc.menu.inicio.toUpperCase(),
            selected: true          
          },
          {
            nom:  this.traduc.menu.noticias.toUpperCase(),
            selected: false          
          },
          {
            nom: this.traduc.menu.analisis.toUpperCase(),
            selected: false          
          },
          {
            nom: this.traduc.menu.avances.toUpperCase(),
            selected: false          
          },
          {
            nom: this.traduc.menu.guias.toUpperCase(),
            selected: false  
          }
        ];
        console.log(this.menuOpciones);
    });
    
    this.idiomas = tService.getIdiomasDisponibles();    
    tService.setIdioma(this.idiomas[0]);   
    
   
      
  }  

  ngOnInit(): void {
  }

  changeSection(opcion: any){
    console.log("cambiando a ");
    console.log(opcion);
    this.menuOpciones?.forEach(op =>{
      if(op == opcion){
        op.selected=true;
      }else{
        op.selected=false;
      }
    })
  }

}
