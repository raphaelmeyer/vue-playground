import { defineStore } from 'pinia'
import type { CardId } from '@/models/card.model'
import type { CharacterId } from '@/models/character.model'

interface PlayerState {
  name: string
  character: CharacterId
  hand: CardId[]
}

export const usePlayerStore = defineStore({
  id: 'PlayerStore',
  state: (): PlayerState => {
    return { name: 'Mirakuliks', character: 1, hand: [101, 102] }
  }
})
