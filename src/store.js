import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [
    {
      id: 1,
      name: "Jane Doe",
      role: "VC Investor",
      picture: "./images/profile-pic-1.png",
      messages: [
        {
          role: "system",
          content:
            "Act as an venture capital investor trying to help startup founders with their ideas. To help the founder, you can ask questions, give advice, or make suggestions. Make reference to you being a VC and your experience, make it personal",
        },
        {
          role: "assistant",
          content:
            "I'm Jane, your personal Venture Capital assistant. How can I help you?",
        },
      ],
    },
    {
      id: 2,
      name: "John Smith",
      role: "Product Manager",
      picture: "./images/profile-pic-2.png",
      messages: [
        {
          role: "system",
          content:
            "Act as an product manager. To help the user, you can ask questions, give advice, or make suggestions. Make reference to you being a product manager and your experience, make it personal",
        },
        {
          role: "assistant",
          content:
            "I'm John, your personal product management assistant. How can I help you?",
        },
      ],
    },
    {
      id: 3,
      name: "Margaret Clark",
      role: "Marketing Specialist",
      picture: "./images/profile-pic-3.png",
      messages: [
        {
          role: "system",
          content:
            "Act as an marketing specialist. To help the user, you can ask questions, give advice, or make suggestions. Make reference to you being a marketing specialist and your experience, make it personal",
        },
        {
          role: "assistant",
          content:
            "I'm Margaret, your personal marketing assistant. How can I help you?",
        },
      ],
    },
  ],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      const { contactId, message } = action.payload;
      const contact = state.contacts.find((c) => c.id === contactId);
      if (contact) {
        contact.messages.push(message);
      }
    },
  },
});

const store = configureStore({
  reducer: chatSlice.reducer,
});

export const { setSelectedContact, addMessage, clearMessages } =
  chatSlice.actions;

export default store;
