import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export type CarPlaceholderImg = {
  url: string
  alt: string
}

export interface commonState {
  carPlaceholderImg: CarPlaceholderImg
  oldCarPlaceholderImage: CarPlaceholderImg
  brands: null | any[]
  site: null | string
  logo: null | any,
  tags? : any[]
}

const initialState: commonState = {
  carPlaceholderImg: {
    url: '',
    alt: ''
  },
  brands: null,
  site: null,
  logo: null,
  oldCarPlaceholderImage: {
    url: '',
    alt: ''
  },
  tags: []
}

const commonSlice = createSlice({
  name: 'common',
  initialState: initialState,
  reducers: {
    setCarPlaceholderImage: (state, action) => {
      state.carPlaceholderImg = action.payload
    },
    setBrands: (state, action) => {
      state.brands = action.payload
    },
    setSite: (state, action) => {
      state.site = action.payload
    },
    setLogo: (state, action) => {
      state.logo = action.payload
    },
    setOldCarPlaceholderImage: (state, action) => {
      state.oldCarPlaceholderImage = action.payload
    },
    setTags: (state, action) => {
      state.tags = action.payload
    }
  }
})

export const {
  setCarPlaceholderImage,
  setBrands,
  setSite,
  setLogo,
  setOldCarPlaceholderImage,
  setTags
} = commonSlice.actions

export default commonSlice.reducer

export const commonSelector = (state: RootState) => state.common
