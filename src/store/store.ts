import { FakeObjectSlice } from './features/example-slice';
import {configureStore} from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux/es/types';
import { useSelector } from 'react-redux/es/exports';
import { createWrapper } from 'next-redux-wrapper';

export const store = () => configureStore({
    reducer:{
       fObject:FakeObjectSlice.reducer
    },
    devTools: true,
})


export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore["getState"]>;


export const wrapper = createWrapper<AppStore>(store);