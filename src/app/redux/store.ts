import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { persistReducer, createMigrate } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { migrations } from './migrations'

import commonReducer from './slices/common-slice'
import globalReducer from './slices/global-slice'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  migrate: createMigrate(migrations, { debug: false }),
  blacklist: []
}

const reducers = combineReducers({
  common: commonReducer,
  global: globalReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: [thunk]
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
