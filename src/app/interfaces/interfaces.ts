export interface Square{
  width: number;
  height: number;

}

export interface Coordinates{
  xWidth: number;
  yHeight: number;
}

export interface Rover{
  direction: 'L' | 'R' | 'A'; //Direction
  orientation: 'N' | 'E' | 'S' | 'W';
  coordinates: Coordinates;
  succesTrip?: boolean;
}
