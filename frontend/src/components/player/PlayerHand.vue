<script setup lang="ts">
import { usePlayerStore } from '../../store/player'
import ActionCard from '../ActionCard.vue'

const player = usePlayerStore()

</script>

<template>
  <div>
    {{ player.name }}
  </div>
  <div class="cards">
    <div
      v-for="card in player.hand"
      :key="card"
    >
      <ActionCard :id="card" />
    </div>
  </div>
</template>

<style scoped>

.cards {
  display: flex;
}

</style>




