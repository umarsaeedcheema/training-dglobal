import {configureStore} from '@reduxjs/toolkit'
import { countReducer } from './Redux'

export const store = configureStore(countReducer)