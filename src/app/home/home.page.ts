import { Component } from '@angular/core';
import { HelpersService } from '../services/helpers.service';
import { Rover, Coordinates, Square } from '../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  arrayOrders = ['L','A','A','R','A','R','A','L']; //Sale
  arrayOrders2 = ['L','R','A','R','A','L']; //Dentro
  rover:Rover={
    direction: 'A',
    orientation: 'N',
    coordinates:{
      xWidth:1,
      yHeight:1,
    }
  }

  mars:Square={
    width: 10,
    height: 10
  }

  constructor( private helper:HelpersService) {

   helper.trip(this.arrayOrders,this.rover,this.mars);

  }

}
