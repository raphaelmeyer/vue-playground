import type { Ability } from '@/models/ability.model'

export type CardId = number

export interface Card {
  id: CardId
  name: string
  topAction: Ability[]
  bottomAction: Ability[]
}
