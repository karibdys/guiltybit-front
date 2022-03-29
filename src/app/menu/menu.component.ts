import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuOpciones: Array<any>;


  constructor() {
    this.menuOpciones=[
      "HOME",
      "MANU",
      "NOTICIAS",
      "OTROS"
    ]
  }  

  ngOnInit(): void {
  }

}
