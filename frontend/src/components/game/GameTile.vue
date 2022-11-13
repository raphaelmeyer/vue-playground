<script setup lang="ts">
import { computed } from "vue";
import type { Position, Tile } from "@/models/game.model";
import PlayerIcon from "@/components/game/PlayerIcon.vue";
import { usePlayerStore } from "@/store/player.store";

interface TileProps {
  tile: Tile;
  hasPlayer: boolean;
}

const props = defineProps<TileProps>();

const player = usePlayerStore();

function position(p: Position) {
  const x = 220;
  const y = 200;
  const r = 90;

  const posx =
    x + r * (p.x - player.position.x) + (r / 2) * (p.y - player.position.y);
  const posy = y + r * 0.87 * (p.y - player.position.y);

  return { x: posx, y: posy };
}

function movePlayer() {
  player.move(props.tile.position);
}

const getTileStyle = computed(() => {
  const p = position(props.tile.position);
  return `position: absolute; top: ${p.y}px; left: ${p.x}px;`;
});
</script>

<template>
  <div
    :style="getTileStyle"
    class="gametile"
    :class="props.tile.landscape"
    @click="movePlayer"
  >
    <PlayerIcon v-if="props.hasPlayer" />
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
  background: linear-gradient(45deg, yellow, sandybrown, brown);
}
.forest {
  background: linear-gradient(240deg, darkgreen, forestgreen, lawngreen);
}
.hills {
  background: radial-gradient(darkolivegreen, darkslategrey);
}
.mountains {
  background: radial-gradient(white, grey, darkslategray);
}
.sea {
  background: linear-gradient(lightblue, royalblue, darkblue);
}

.gametile:hover {
  background: none;
  background-color: hotpink;
}
</style>
