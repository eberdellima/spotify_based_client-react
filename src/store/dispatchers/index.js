import actions from '../actions/index'
import store from '../index';

export function dispatchSetSong(song) {
  return store.dispatch(actions.SET_SONG(song))
}

export function dispatchToggleSong(isPlaying) {
  return store.dispatch(actions.TOGGLE_SONG(isPlaying))
}

export function dispatchEndSong() {
  return store.dispatch(actions.END_SONG())
}