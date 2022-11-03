<script setup lang="ts">
import type { CardId } from '@/models/card.model';
import { cards } from '@/models/rules.model'
import { computed } from 'vue';

interface CardProps {
    id: CardId
}

const props = defineProps<CardProps>()
const card = computed(() => {
    return cards.find((c, _i) => c.id == props.id)
})
</script>

<template>
  <div
    v-if="card"
    class="action-card"
  >
    <div class="title">
      {{ card.name }}
    </div>
    <div class="action">
      <p v-for="ability in card.topAction">
        {{ ability.type }} {{ ability.value }}
      </p>
    </div>
    <div class="action">
      <p v-for="ability in card.bottomAction">
        {{ ability.type }} {{ ability.value }}
      </p>
    </div>
  </div>
</template>

<style scoped>
    .action-card {
        border: 1px solid black;
        width: 8.0em;
        flex: 1;
        margin-right: 1.0em;
    }
    div.title {
        height: 2.0em;
    }
    div.action {
        height: 4.0em;
        border-top: 1px solid black;
    }
</style>
