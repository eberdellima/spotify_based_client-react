import { createStore } from 'redux'
import appReducer from './reducers/index';

const store = createStore(appReducer)

store.subscribe(() => {
  console.log(`store date: ${store.getState()}`)
})

export default store