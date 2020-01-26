function createReducer() {
  
  const initialState = {
    isPlaying: false,
    song: {}
  }

  const reducers = {
    SET_SONG: ({song, state}) => {
      return Object.assign({}, state, {
        song,
        isPlaying: true
      })
    },
  
    TOGGLE_SONG: ({isPlaying, state}) => {
      return Object.assign({}, state, { isPlaying })
    },
  
    END_SONG: ({isPlaying, state}) => {
      return Object.assign({}, state, { isPlaying })
    }
  }

  return (state = initialState, action) => {
    return reducers[action.type] ? reducers[action.type]({state, ...action}) : state
  }
}

const appReducer = createReducer()

export default appReducer