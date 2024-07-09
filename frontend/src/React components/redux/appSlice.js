// redux/appSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
  email: {
    to: '',
    subject: '',
    message: ''
  },
  emailList: [],
  selectedEmail: null  // Add this line
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTo: (state, action) => {
      state.email.to = action.payload;
    },
    setSubject: (state, action) => {
      state.email.subject = action.payload;
    },
    setBody: (state, action) => {
      state.email.message = action.payload;
    },
    closeCompose: (state) => {
      state.email = { to: '', subject: '', message: '' };
    },
    addEmail: (state, action) => {
      state.emailList.push(action.payload);
    },
    setAuthUser: (state, action) => {
      state.user = action.payload;
    },
    setEmailList: (state, action) => {
      state.emailList = action.payload;
    },
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setSelectedEmail: (state, action) => {  // Add this action
      state.selectedEmail = action.payload;
    }
  }
});

export const {
  setTo,
  setSubject,
  setBody,
  closeCompose,
  addEmail,
  setAuthUser,
  setEmailList,
  setOpen,
  setSelectedEmail
} = appSlice.actions;

export default appSlice.reducer;



