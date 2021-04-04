'use strict'

import React from 'react'

import Filter from 'components/filter'
import Form from 'components/form'
import TodosList from 'components/todos-list'

const App = () => (
  <div>
    <Form />
    <TodosList />
    <Filter />
  </div>
)

export default App
