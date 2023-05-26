import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FakeObject {
  name: string;
  id: string;
  spec: string;
}

export interface FakeObjectState {
  fakeObjects: FakeObject[];
}

const initialState: FakeObjectState = {
  fakeObjects: [],
};

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
});

export default FakeObjectSlice.reducer;
export const { addFakeObject } = FakeObjectSlice.actions;
