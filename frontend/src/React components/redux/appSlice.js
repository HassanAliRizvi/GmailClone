import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    open: false,
    user: null,
    emails: [],
    emailList: [],
    selectedEmail: null,
    searchText: "",
    email: { to: "", subject: "", message: "" },
  },
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setAuthUser: (state, action) => {
      state.user = action.payload;
    },
    setEmails: (state, action) => {
      state.emails = action.payload;
    },
    setSelectedEmail: (state, action) => {
      state.selectedEmail = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setTo: (state, action) => {
      state.email = { ...state.email, to: action.payload };
    },
    setSubject: (state, action) => {
      state.email = { ...state.email, subject: action.payload };
    },
    setBody: (state, action) => {
      state.email = { ...state.email, message: action.payload };
    },
    closeCompose: (state) => {
      state.email = { to: "", subject: "", message: "" };
      state.open = false;
    },
    addEmail: (state, action) => {
      state.emailList.push(action.payload);
    },
    setEmailList: (state, action) => {
      state.emailList = action.payload;
    },
  },
});

export const {
  setOpen,
  setAuthUser,
  setEmails,
  setSelectedEmail,
  setSearchText,
  setTo,
  setSubject,
  setBody,
  closeCompose,
  addEmail,
  setEmailList,
} = appSlice.actions;

export default appSlice.reducer;


