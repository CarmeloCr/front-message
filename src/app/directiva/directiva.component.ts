import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})

export class DirectivaComponent {
  listaCurso: string[] = [ 'TypeScript', 'Javascript', 'Java SE', 'PHP'];
  habilitar:boolean = true;
  constructor() { }

  setHabilitar() {
    this.habilitar= (this.habilitar == true) ? false : true;
  }
}
