import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface GlobalSliceStateProps {
  clickedTasaTuAutoStatus: boolean
  tasaTuAutoButtonVariant: string
}

const initialState: GlobalSliceStateProps = {
  clickedTasaTuAutoStatus: false,
  tasaTuAutoButtonVariant: ''
}

export const globalSlice = createSlice({
  name: 'global',
  initialState: initialState,
  reducers: {
    onClickTasarAuto: (state) => {
      state.clickedTasaTuAutoStatus = true
    },
    offClickTasarAuto: (state) => {
      state.clickedTasaTuAutoStatus = false
    },
    setTasaTuAutoButtonVariant: (state, action) => {
      state.tasaTuAutoButtonVariant = action.payload
    }
  }
})

export const {
  onClickTasarAuto,
  offClickTasarAuto,
  setTasaTuAutoButtonVariant
} = globalSlice.actions

export default globalSlice.reducer

export const globalSelector = (state: RootState) => state.global
