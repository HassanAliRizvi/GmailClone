// redux/appSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: {
    to: '',
    from: '',
    subject: '',
    body: ''
  }
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTo: (state, action) => {
      state.email.to = action.payload;
    },
    setFrom: (state, action) => {
      state.email.from = action.payload;
    },
    setSubject: (state, action) => {
      state.email.subject = action.payload;
    },
    setBody: (state, action) => {
      state.email.body = action.payload;
    },

    setAuthUser: (state, action) => {
      state.user = action.payload;
    },

    closeCompose: (state) => {
      state.email = { to: '', from: '', subject: '', body: '' };
    }
  }
});

export const { setTo, setFrom, setSubject, setBody, closeCompose, setAuthUser } = appSlice.actions;
export default appSlice.reducer;

