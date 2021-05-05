import { Component } from '@angular/core';
import { HelpersService } from '../services/helpers.service';
import { Rover, Square } from '../interfaces/interfaces';

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
    },
    successTrip: true
  }

  mars:Square={
    width: 10,
    height: 10
  }

  width = 100;
  height = 100;
  orientacion;

  constructor( private helper:HelpersService) {

   helper.trip(this.arrayOrders2,this.rover,this.mars);
   this.orientacion = this.rover.orientation;

  }


  getHeight(){
    this.mars.height = this.height;
    return this.height+'px'
  }

  getWidth(){
    console.log(this.width);
    this.mars.width = this.width;
    return this.width+'px'
  }

  getLeft(){
    console.log('Left', ((this.rover.coordinates.xWidth)*10)+16+'px');
    return ((this.rover.coordinates.xWidth)*10)+8+'px'
  }

  getBottom(){
    console.log('Bottom', ((this.rover.coordinates.yHeight)*10)+16+'px');
    return ((this.rover.coordinates.yHeight)*10)+16+'px'
  }



}
