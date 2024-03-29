import { reducerCases } from "./constants"

export const initialState = {
  userInfo: undefined,
  newUser: false,
  contactsPage: false,
  messageSearch: false,
  currentChatUser: undefined,
  socket: undefined,
  messages: [],
  userContacts: [],
  videoCall: undefined,
  voiceCall: undefined,
  incomingVideoCall: undefined,
  incomingVoiceCall: undefined,
  onlineUsers: [],
  contactSearch: "",
  filteredContacts: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo,
      }
    case reducerCases.SET_NEW_USER:
      return {
        ...state,
        newUser: action.newUser,
      }
    case reducerCases.SET_ALL_CONTACTS_PAGE:
      return {
        ...state,
        contactsPage: !state.contactsPage,
      }
    case reducerCases.SET_MESSAGES_SEARCH:
      return {
        ...state,
        messageSearch: !state.messageSearch,
      }
    case reducerCases.CHANGE_CURRENT_CHAT_USER:
      return {
        ...state,
        currentChatUser: action.user,
      }
    case reducerCases.SET_SOCKET:
      return {
        ...state,
        socket: action.socket,
      }
    case reducerCases.ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.newMessage],
      }
    case reducerCases.SET_MESSAGES:
      return {
        ...state,
        messages: action.messages,
      }
    case reducerCases.SET_USER_CONTACTS:
      return {
        ...state,
        userContacts: action.userContacts,
      }
    case reducerCases.SET_VIDEO_CALL:
      return {
        ...state,
        videoCall: action.videoCall,
      }
    case reducerCases.SET_VOICE_CALL:
      return {
        ...state,
        voiceCall: action.voiceCall,
      }
    case reducerCases.END_CALL:
      return {
        ...state,
        videoCall: undefined,
        voiceCall: undefined,
        incomingVideoCall: undefined,
        incomingVoiceCall: undefined,
      }
    case reducerCases.SET_INCOMING_VIDEO_CALL:
      return {
        ...state,
        incomingVideoCall: action.incomingVideoCall,
      }
    case reducerCases.SET_INCOMING_VOICE_CALL:
      return {
        ...state,
        incomingVoiceCall: action.incomingVoiceCall,
      }
    case reducerCases.SET_EXIT_CHAT:
      return {
        ...state,
        currentChatUser: undefined,
        messages: [],
      }
    default:
      return state
  }
}

export default reducer
