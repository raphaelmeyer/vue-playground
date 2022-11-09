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
  const r = 100;

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
  background-color: orange;
  padding: 5px 4px;
  margin: 0;
  width: 87px;
  height: 100px;
  clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
  text-align: center;
}

.desert {
  background-color: sandybrown;
}
.forest {
  background-color: darkgreen;
}
.hills {
  background-color: darkcyan;
}
.mountains {
  background-color: grey;
}
.sea {
  background-color: blue;
}

.gametile:hover {
  background-color: hotpink;
}
</style>
