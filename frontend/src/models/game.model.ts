export type Type = "forest" | "grass" | "dirt" | "swamp" | "hill";

export interface Hex {
  x: number;
  y: number;
  type: Type;
}

export interface Position {
  x: number;
  y: number;
}
