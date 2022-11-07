import type { Hex } from "@/models/game.model";
import { defineStore } from "pinia";

export interface GameState {
  grid: Hex[];
}

export const useGameStore = defineStore({
  id: "GameStore",
  state: (): GameState => {
    return { grid: [] };
  },
});
