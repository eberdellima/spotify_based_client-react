import { createStore } from 'redux'

//state
const initialState = {
  song: {},
  isPlaying: false
}

//filters
const SET_SONG = "SET_SONG";
const END_SONG = "END_SONG";
const TOGGLE_SONG = "TOGGLE_SONG";

//reducer
function setNewSong (state = initialState, action) {
  switch(action.type){
    case SET_SONG : 
      return Object.assign({}, state, {
        song: action.song,
        isPlaying: true
      });
    case TOGGLE_SONG:
      return Object.assign({}, state, {
        isPlaying: action.value
      })
    case END_SONG:
      return Object.assign({}, state, {
        isPlaying: false
      })
    default: return state
  }
}

//store
export const store = createStore(setNewSong, initialState)

