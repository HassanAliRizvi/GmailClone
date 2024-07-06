// redux/appSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: {
    to: '',
    from: '',
    subject: '',
    body: ''
  },
  emailList: []  // Add this line
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
      state.email = { to: '', subject: '', body: '' };
    },
    addEmail: (state, action) => {  // Add this action
      state.emailList.push(action.payload);
    },
    setAuthUser: (state, action) => {
      state.user = action.payload;
    } ,
    setEmailList: (state, action) => { // Add this action
      state.emailList = action.payload;
    } 
  }
});

export const { setTo, setSubject, setBody, closeCompose, addEmail, setAuthUser, setEmailList } = appSlice.actions;
export default appSlice.reducer;


