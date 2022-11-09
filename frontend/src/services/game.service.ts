import type { Landscape, Tile, World } from "@/models/game.model";

export class GameService {
  public static generateWorld(n: number): World {
    const landscapes: Landscape[] = [
      "desert",
      "forest",
      "hills",
      "mountains",
      "sea",
    ];
    const tiles: Tile[] = [];
    for (let x = -n; x <= n; x++) {
      for (let y = -n; y <= n; y++) {
        const l = Math.floor(Math.random() * landscapes.length);
        tiles.push({ position: { x: x, y: y }, landscape: landscapes[l] });
      }
    }
    return { tiles: tiles };
  }
}
