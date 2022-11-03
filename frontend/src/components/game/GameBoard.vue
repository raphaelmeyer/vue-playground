<script setup lang="ts">

import type { Hex } from '@/models/game.model';
import { usePlayerStore } from '../player/Player.store';
import Tile from './Tile.vue'

const grid: Hex[] = [
  { x: -2, y: 2, type: 'hill' },
  { x: -1, y: 2, type: 'hill' },
  { x: 0, y: 2, type: 'hill' },

  { x: -2, y: 1, type: 'dirt' },
  { x: -1, y: 1, type: 'dirt' },
  { x: 0, y: 1, type: 'dirt' },
  { x: 1, y: 1, type: 'dirt' },

  { x: -2, y: 0, type: 'grass' },
  { x: -1, y: 0, type: 'grass' },
  { x: 0, y: 0, type: 'forest' },
  { x: 1, y: 0, type: 'grass' },
  { x: 2, y: 0, type: 'grass' },

  { x: -1, y: -1, type: 'swamp' },
  { x: 0, y: -1, type: 'swamp' },
  { x: 1, y: -1, type: 'swamp' },
  { x: 2, y: -1, type: 'swamp' },

  { x: 0, y: -2, type: 'forest' },
  { x: 1, y: -2, type: 'forest' },
  { x: 2, y: -2, type: 'forest' },
];

const player = usePlayerStore()

</script>

<template>
  <div class="board">
    <span
      v-for="(hex, index) in grid"
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
