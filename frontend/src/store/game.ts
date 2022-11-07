import { defineStore } from 'pinia'

interface GameState {

  }
  
  export const useGameStore = defineStore({
    id: 'GameStore',
    state: (): GameState => {
      return { }
    }
  })
  



  