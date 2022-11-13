import { defineStore } from "pinia";
import type { CardId } from "@/models/card.model";
import type { CharacterId } from "@/models/character.model";
import type { Position } from "@/models/game.model";

export interface PlayerState {
  name: string;
  character: CharacterId;
  hand: CardId[];
  position: Position;
}

export const usePlayerStore = defineStore({
  id: "PlayerStore",
  state: (): PlayerState => {
    return {
      name: "Mirakuliks",
      character: 1,
      hand: [101, 102],
      position: { x: 0, y: 0 },
    };
  },

  actions: {
    move(to: Position) {
      this.position.x = to.x;
      this.position.y = to.y;
    },
  },
});
