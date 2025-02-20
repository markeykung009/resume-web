import { configureStore } from "@reduxjs/toolkit";
import darkmodeSlice from "../features/darkmodeSlice";

export const store = configureStore({
  reducer: {
    darkmode: darkmodeSlice,
  },
});
