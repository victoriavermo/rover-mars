import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rover',
  templateUrl: './rover.component.html',
  styleUrls: ['./rover.component.scss'],
})
export class RoverComponent implements OnInit {

  @Input() orientacion: 'N' | 'S' | 'E' | 'W';
  // @Input() orientacion: string;
  constructor() { }

  ngOnInit() {
    console.log('HOLA',this.orientacion);
  }

}
