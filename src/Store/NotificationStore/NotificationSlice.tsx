import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface NotificationState {
  isOpen: boolean;
  message: string;
  isNotificationAnimationPending: boolean;
  isNotificationClosing: boolean;
}

const initialState = {
  isOpen: false,
  message: "",
  isNotificationAnimationPending: false,
  isNotificationClosing: false,
} as NotificationState;

const NotificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    show(state, action: PayloadAction<string>) {
      state.isOpen = true;
      state.message = action.payload;
      state.isNotificationAnimationPending = true;
    },
    close(state) {
      state.isOpen = false;
      state.message = "";
      state.isNotificationAnimationPending = false;
      state.isNotificationClosing = false;
    },
    startCloseAnimation(state) {
      state.isNotificationAnimationPending = true;
      state.isNotificationClosing = true;
    },
    stopOpeningAnimation(state) {
      state.isNotificationAnimationPending = false;
    },
  },
});

export const { show, close, startCloseAnimation, stopOpeningAnimation } =
  NotificationSlice.actions;
export default NotificationSlice.reducer;
