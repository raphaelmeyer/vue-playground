export interface World {
  tiles: Tile[];
}

export interface Tile {
  position: Position;
  landscape: Landscape;
}

export type Landscape = "desert" | "forest" | "hills" | "mountains" | "sea";

export interface Position {
  x: number;
  y: number;
}
