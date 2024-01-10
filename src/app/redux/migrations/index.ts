import { store } from '../store'

export const migrations: any = {
  0: (state: ReturnType<typeof store.getState>) => {
    // migration clear out device state
    return {
      ...state
    }
  }
}
