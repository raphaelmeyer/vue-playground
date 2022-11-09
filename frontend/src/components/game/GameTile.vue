<script setup lang="ts">
import { computed } from "vue";
import type { Position, Tile } from "@/models/game.model";

interface TileProps {
  tile: Tile;
}

const props = defineProps<TileProps>();

function position(p: Position) {
  const x = 220;
  const y = 200;
  const r = 90;

  const posx = x + r * p.x + (r / 2) * p.y;
  const posy = y + r * 0.87 * p.y;

  return { x: posx, y: posy };
}

const getTileStyle = computed(() => {
  const p = position(props.tile.position);
  return `position: absolute; top: ${p.y}px; left: ${p.x}px;`;
});
</script>

<template>
  <div :style="getTileStyle" class="gametile" :class="props.tile.landscape">
    {{ props.tile.landscape }}
  </div>
</template>

<style scoped>
.gametile {
  box-sizing: border-box;
  padding: 5px 4px;
  margin: 0;
  width: 87px;
  height: 100px;
  clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
  text-align: center;
}

.desert {
  background-image: radial-gradient(yellow, sandybrown);
}
.forest {
  background-image: radial-gradient(darkgreen, green);
}
.hills {
  background-image: radial-gradient(darkcyan, grey);
}
.mountains {
  background-image: radial-gradient(gainsboro, grey);
}
.sea {
  background-image: radial-gradient(darkblue, blue);
}

.gametile:hover {
  background-image: none;
  background-color: hotpink;
}
</style>
