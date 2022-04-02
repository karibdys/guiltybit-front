import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { TraductorService } from '../services/traductor.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public logo = "assets/img/guiltybit-logo.png";
  
  public idioma: string | undefined;
  public idioma$: Observable<string>;
  public idiomas: Array<string>;
  public traduc: any;

  constructor(
    public tService: TraductorService
  ) {   
    this.idioma$ = this.tService.getIdioma$();
    this.idioma$.subscribe(
      () => {
        this.idioma = tService.getIdioma();
        this.traduc = tService.getTextos();
        console.log("cambiado idioma por subscriptor")
    });
    
    this.idiomas = tService.getIdiomasDisponibles();    
    tService.setIdioma(this.idiomas[0]);   
    
   }

  ngOnInit(): void {
    
    
  }

  cambiarIdioma(value: string){   
    this.tService.setIdioma(value);
  }

}
