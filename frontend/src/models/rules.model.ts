import { AbilityType } from "./ability.model";
import type { Card } from "./card.model";
import type { Character } from "./character.model";

export const characters: Character[] = [
  { id: 1, name: "Alchemist", cards: [101, 102], handsize: 10, health: 10 },
  { id: 2, name: "Wizard", cards: [], handsize: 10, health: 10 },
  { id: 3, name: "Druid", cards: [301, 301], handsize: 10, health: 10 },
];

export const cards: Card[] = [
  {
    id: 101,
    name: "Pluck",
    topAction: [{ type: AbilityType.Loot, value: 1 }],
    bottomAction: [{ type: AbilityType.Move, value: 2 }],
  },
  {
    id: 102,
    name: "Grab",
    topAction: [{ type: AbilityType.Loot, value: 2 }],
    bottomAction: [{ type: AbilityType.Move, value: 1 }],
  },

  { id: 301, name: "Flower Scissor", topAction: [], bottomAction: [] },
  { id: 301, name: "Scythe", topAction: [], bottomAction: [] },
];
