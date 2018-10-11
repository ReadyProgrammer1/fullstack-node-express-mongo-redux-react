import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import userEntriesReducer from '../features/user-entries/reducer'

const rootReducer = combineReducers({
  userEntries: userEntriesReducer,
  form: formReducer,
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store