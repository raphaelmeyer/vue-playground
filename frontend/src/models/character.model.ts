import type { CardId } from "./card.model";

export type CharacterId = number;

export interface Character {
  id: CharacterId;
  name: string;
  cards: CardId[];
  handsize: number;
  health: number;
}
