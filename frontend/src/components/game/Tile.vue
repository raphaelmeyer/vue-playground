<script setup lang="ts">

import type { Hex } from '@/models/game.model';
import { computed } from 'vue';

interface TileProps {
    hex: Hex
}

const props = defineProps<TileProps>()

function position(hex: Hex) {
    const x = 220;
    const y = 200;
    const r = 100;

    const posx = x + r * hex.x + (r / 2) * hex.y;
    const posy = y + (3 * r / 4) * hex.y;

    return {x: posx, y: posy};
}

const getTileStyle = computed(() => {
    const p = position(props.hex);
    return `position: absolute; top: ${p.y}px; left: ${p.x}px;`;
});

</script>

<template>
  <div
    :style="getTileStyle"
    class="tile"
    :class="props.hex.type"
  >
    {{ props.hex.type }}
  </div>
</template>

<style scoped>
    .tile {
        background-color: orange;
        padding: 5px;
        margin: 5px;
        width: 80px; height: 80px;
        clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
        text-align: center;
    }

    .dirt {
      background-color: sandybrown;
    }
    .forest {
      background-color: darkgreen;
    }
    .grass {
      background-color: green;
    }
    .hill { 
      background-color: gray;
    }
    .swamp {
      background-color: brown;
    }

    .tile:hover {
        background-color: hotpink;
    }

</style>
