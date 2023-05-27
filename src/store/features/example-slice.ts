import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../store";

export interface FakeObject {
  name: string;
  id: string;
  spec: string;
}

export enum StoreFetchStatus {
  notStarted = "NOT-STARTED",
  loading = "LOADING",
  success = "SUCCESS",
  error = "ERROR",
}

export interface FakeObjectState {
  fakeObjects: FakeObject[];
  status: StoreFetchStatus;
}

const initialState: FakeObjectState = {
  fakeObjects: [],
  status: StoreFetchStatus.notStarted,
};

// FUNZIONE ASINCRONA PER FETCH
export const fetchFakeObject: any = createAsyncThunk(
  "fObjects/fetchFakeObjects",
  async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return response.data;
    } catch (error) {
      console.error(
        "Errore nella fetch di example-slice.ts fetchFakeObject function",
        error
      );
      return error;
    }
  }
);
export const FakeObjectSlice = createSlice({
  // NOME DELLO STATO PER REDUX
  name: "fObject",
  initialState,
  reducers: {
    addFakeObject: (
      state,
      action: PayloadAction<{ name: string; spec: string }>
    ) => {
      state.fakeObjects.push({
        ...action.payload,
        id: Math.round(Math.random() * 9999).toString(),
      });
    },
  },
  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
    [fetchFakeObject.pending]: (state, action) => {
      
      state.status = StoreFetchStatus.loading;
    },
    [fetchFakeObject.fulfilled]: (state, action) => {
      state.status = StoreFetchStatus.success;
    },
    [fetchFakeObject.rejected]: (state, action) => {
      state.status = StoreFetchStatus.error;
    },
  },
});

export default FakeObjectSlice.reducer;
export const selectFakeObjects = (state: AppState) => state.fObject.fakeObjects;
export const selectStatus = (state: AppState) => state.fObject.status;
export const { addFakeObject } = FakeObjectSlice.actions;
