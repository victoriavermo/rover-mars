import { Injectable } from '@angular/core';
import { Coordinates, Square } from '../interfaces/interfaces';

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

}
