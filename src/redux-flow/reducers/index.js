'use strict'

import reducerTodos from './todos'
import reducerVisibilityFilter from './visibility-filter'

const rootReducer = (state = {}, action) => ({
  todos: reducerTodos(state.todos, action),
  visibilityFilter: reducerVisibilityFilter(state.visibilityFilter, action)
})

export default rootReducer
