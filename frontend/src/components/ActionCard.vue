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
  <div v-if="card">
    <div>{{ card.name }}</div>
    <div>
      <p v-for="ability in card.topAction">
        {{ ability.type }} {{ ability.value }}
      </p>
    </div>
    <div>
      <p v-for="ability in card.bottomAction">
        {{ ability.type }} {{ ability.value }}
      </p>
    </div>
  </div>
</template>


