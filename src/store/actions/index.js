
const actions = {
  
  SET_SONG: (song) => {
    return {
      song,
      isPlaying: true,
      type: 'SET_SONG'
    }
  },

  TOGGLE_SONG: (isPlaying) => {
    return {
      isPlaying,
      type: 'TOGGLE_SONG'
    }
  },

  END_SONG: () => {
    return {
      isPlaying: false,
      type: 'END_SONG'
    }
  }
}

export default actions