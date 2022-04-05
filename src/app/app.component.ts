import { Component } from '@angular/core';
import { TraductorService } from './services/traductor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'guiltybit-front';

  constructor(
    private tService: TraductorService
  ){}

  ngOnInit(){
    
  }
}
