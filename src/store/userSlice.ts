import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  name: string
  bounce: {
    doors: boolean
    tres: boolean
    stash: boolean
  }
  highlight: {
    skirmish: boolean
    players: boolean
  }
}

const initialState: UserState = {
  name: '',
  bounce: {
    doors: false,
    tres: false,
    stash: false
  },
  highlight: {
    skirmish: false,
    players: false
  }
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.name = action.payload
    },
    inviteToDraft: (state) => { 
      state.bounce.doors = true
      state.bounce.tres = true
    },
    highlight: (state) => {
      state.highlight.skirmish = true
    }
  },
})

// Action creators are generated for each case reducer function
export const { setName } = userSlice.actions
export const actionsUser = userSlice.actions

export default userSlice.reducer