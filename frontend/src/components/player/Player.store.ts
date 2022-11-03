import { defineStore } from 'pinia'
import type { CardId } from '@/models/card.model'
import type { CharacterId } from '@/models/character.model'
import type { Position } from '@/models/game.model'

interface PlayerState {
  name: string
  character: CharacterId
  hand: CardId[]
  position: Position
}

export const usePlayerStore = defineStore({
  id: 'PlayerStore',
  state: (): PlayerState => {
    return { name: 'Mirakuliks', character: 1, hand: [101, 102] , position: {x: 0, y:0}}
  }
})
