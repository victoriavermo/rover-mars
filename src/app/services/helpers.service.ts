import { Injectable } from '@angular/core';
import { Coordinates, Square, Rover } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor() { }

  checkRoverPosition(square:Square,coord:Coordinates):boolean{

    const maxWidth = square.width; // The max width of the square will be the width of the square.
    const maxHeight = square.height; // The max height of the square will be the height of the square.

    //Check if coordinates are within those boundaries and also positive number
    return ( coord.xWidth <= maxWidth )
    && ( coord.yHeight <= maxHeight )
    && ( coord.xWidth >= 0 && coord.yHeight >= 0 )

  }

  changeOrientation(newDirection:'L' | 'R' | 'A', orientPrevia: 'N' | 'E' | 'S' | 'W'): 'N' | 'E' | 'S' | 'W'{

    //const orientPrevia = rover.orientation;
    // Direction L, R, A
    // Orientation N W E S
    switch(newDirection){
      case 'L':
        if(orientPrevia == 'N'){
          return 'W';
        }
        if(orientPrevia == 'W'){
          return 'S';
        }
        if(orientPrevia == 'S'){
          return 'E';
        }
        if(orientPrevia == 'E'){
          return 'N';
        }
        break;
      case 'R':
        if(orientPrevia == 'N'){
          return 'E';
        }
        if(orientPrevia == 'E'){
          return 'S';
        }
        if(orientPrevia == 'S'){
          return 'W';
        }
        if(orientPrevia == 'W'){
          return 'N';
        }
        break;

      case 'A':
        return orientPrevia;
    }
  }

  //change position
  getNewCoordinateWhereIWantToGo(coord:Coordinates, orientacion: 'N' | 'E' | 'S' | 'W'):Coordinates{

    switch(orientacion){
      case 'N':
        coord.yHeight++;
        break;
      case 'E':
        coord.xWidth++;
        break;
      case 'S':
        coord.yHeight--;
        break;
      case 'W':
        coord.xWidth--;
        break;
    }
    return {xWidth: coord.xWidth, yHeight: coord.yHeight};

  }

  checkValidMovement(square:Square, direccion:'L' | 'R' | 'A', rover:Rover):Rover{

    const roverCoord = rover.coordinates;
    const orientacion = rover.orientation;
    if(direccion != 'A'){
      rover.orientation = this.changeOrientation(direccion,orientacion);
      rover.succesTrip = true;
      return rover;
    }else{
      const newPosition = this.getNewCoordinateWhereIWantToGo(roverCoord,orientacion);
      console.log('posicionNueva',newPosition);
      //const valid = this.checkRoverPosition(square,newPosition);
      if(this.checkRoverPosition(square,newPosition)){
        rover.coordinates = newPosition;
        rover.succesTrip = true;
        return rover;
      }else{
        rover.succesTrip = false;
        return rover;
      }

    }

  }

  trip(arrayOrders,rover:Rover,map:Square){
    let i = 0;
    rover.succesTrip = true;

    while(rover.succesTrip && i < arrayOrders.length){
      let order = arrayOrders[i];
      console.log('orden',order);
      console.log('coordenadas',rover.coordinates);
      rover = this.checkValidMovement(map,order,rover);
      //console.log(this.checkValidMovement(map,order,rover));
      i++;
    }

    console.log('Final: '+rover.succesTrip+' Coordenada: ('+rover.coordinates.xWidth+','+rover.coordinates.yHeight+') Orientación: '+ rover.orientation);

    /*arrayOrders.forEach(order => {
      console.log('orden',order);
      console.log('coordenads',rover.coordinates);
      console.log(this.checkValidMovement(map,order,rover));
    });*/
  }


}
