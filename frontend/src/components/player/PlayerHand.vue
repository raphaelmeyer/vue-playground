<script setup lang="ts">
import { usePlayerStore } from './Player.store'
import ActionCard from '../ActionCard.vue'

const player = usePlayerStore()

</script>

<template>
  <div>{{ player.name }}</div>
  <div
    v-for="card in player.hand"
    :key="card"
  >
    <ActionCard :id="card" />
  </div>
</template>
