import { createSlice } from "@reduxjs/toolkit";

const getInitialStateFromLocalStorage = () => {
  const storedDarkmode = localStorage.getItem("darkmode");

  return {
    darkmode: storedDarkmode ? JSON.parse(storedDarkmode) : false,
  };
};

// const initialState = {
//   darkmode: getInitialStateFromLocalStorage(),
// };

export const darkmodeSlice = createSlice({
  name: "dark",
  initialState: getInitialStateFromLocalStorage(),
  reducers: {
    switchDarkmode: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.darkmode = !state.darkmode;

      const theDark = state.darkmode;
      localStorage.setItem("darkmode", JSON.stringify(theDark));
    },
  },
});

// Action creators are generated for each case reducer function
export const { switchDarkmode } = darkmodeSlice.actions;

// Load state from local storage on initial load
// eslint-disable-next-line no-unused-vars

export default darkmodeSlice.reducer;
