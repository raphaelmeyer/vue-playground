<script setup lang="ts">

import type { Hex, Type } from '@/models/game.model';
import { computed } from 'vue';
import { usePlayerStore } from '../../store/player';
import Tile from './Tile.vue'

function createGrid(n: number) {
  const grid: Hex[] = [];
  for (let x = -n; x <= n; x++) {
    for (let y = -n; y <= n; y++) {
      const t = 'grass';
      grid.push({ x: x, y: y, type: t });
    }
  }
  return grid;
}

const grid = createGrid(10);

const player = usePlayerStore()

const getFieldOfView = computed(() => {
  return grid.filter((tile) => {
    const x = tile.x - player.position.x;
    const y = tile.y - player.position.y;
    const d = (Math.abs(x) + Math.abs(x + y) + Math.abs(y)) / 2;
    return d <= 2;
  });
});

</script>

<template>
  <div class="board">
    <span
      v-for="(hex, index) in getFieldOfView"
      :key="index"
    >
      <Tile :hex="hex" />
    </span>
  </div>
</template>

<style scoped>
.board {
  position: relative;
  height: 500px;
}
</style>
