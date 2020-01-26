function createReducer() {
  
  const initialState = {
    isPlaying: false,
    song: {}
  }

  const reducers = {
    SET_SONG: (song) => {
      return Object.assign({}, state, {
        song,
        isPlaying: true
      })
    },
  
    TOGGLE_SONG: (isPlaying) => {
      return Object.assign({}, state, { isPlaying })
    },
  
    END_SONG: (isPlaying) => {
      return Object.assign({}, state, { isPlaying })
    }
  }

  return (state = initialState, action) => {
    return reducers[action.type] ? reducers[action.type]({state, ...action}) : null
  }
}

const appReducer = createReducer()

export default appReducer