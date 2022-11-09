import { defineStore } from "pinia";
import type { World } from "@/models/game.model";
import { GameService } from "@/services/game.service";

export interface GameState {
  world: World;
}

export const useGameStore = defineStore({
  id: "GameStore",
  state: (): GameState => {
    return { world: GameService.generateWorld(10) };
  },
});
