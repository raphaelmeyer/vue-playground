export enum AbilityType {
  Attack = "Attack",
  Move = "Move",
  Loot = "Loot",
}

export interface Ability {
  type: AbilityType;
  value: number;
}
