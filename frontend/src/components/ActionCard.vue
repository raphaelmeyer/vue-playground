<script setup lang="ts">
import type { CardId } from "@/models/card.model";
import { cards } from "@/models/rules.model";
import { computed } from "vue";

interface CardProps {
  id: CardId;
}

const props = defineProps<CardProps>();
const card = computed(() => {
  return cards.find((c) => c.id == props.id);
});
</script>

<template>
  <div v-if="card" class="action-card">
    <div class="title">
      {{ card.name }}
    </div>
    <div class="action">
      <p v-for="ability in card.topAction" :key="ability.value">
        {{ ability.type }} {{ ability.value }}
      </p>
    </div>
    <div class="action">
      <p v-for="ability in card.bottomAction" :key="ability.value">
        {{ ability.type }} {{ ability.value }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.action-card {
  border: 1px solid black;
  width: 8em;
  flex: 1;
  margin-right: 1em;
}
div.title {
  height: 2em;
}
div.action {
  height: 4em;
  border-top: 1px solid black;
}
</style>
