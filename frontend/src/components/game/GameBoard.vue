<script setup lang="ts">
import { computed } from "vue";
import { usePlayerStore } from "@/store/player.store";
import { useGameStore } from "@/store/game.store";
import GameTile from "@/components/game/GameTile.vue";
import type { Position } from "@/models/game.model";

const game = useGameStore();
const player = usePlayerStore();

const getFieldOfView = computed(() => {
  return game.world.tiles.filter((tile) => {
    const x = tile.position.x - player.position.x;
    const y = tile.position.y - player.position.y;
    const d = (Math.abs(x) + Math.abs(x + y) + Math.abs(y)) / 2;
    return d <= 2;
  });
});

function isPlayerLocation(tile: Position): boolean {
  return tile.x === player.position.x && tile.y === player.position.y;
}
</script>

<template>
  <div class="board">
    <span v-for="(tile, index) in getFieldOfView" :key="index">
      <GameTile :tile="tile" :has-player="isPlayerLocation(tile.position)" />
    </span>
  </div>
</template>

<style scoped>
.board {
  position: relative;
  height: 500px;
}
</style>
