'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from 'reducers/visibility-filter/actions'

const Filter = ({ activeFilter }) => (
  <div>
    <h3>Mostrar</h3>
    {filterItems.map((item) => {
      if (item.action === activeFilter) {
        return <span key={item.action} style={{ marginRight: 10 }}>{item.label}</span>
      }

      return <a href='' key={item.action} style={{ marginRight: 10 }}>{item.label}</a>
    })}
  </div>
)

const filterItems = [
  { label: 'Todos', action: SHOW_ALL },
  { label: 'Finalizados', action: SHOW_COMPLETED },
  { label: 'A fazer', action: SHOW_ACTIVE }
]

const mapStateToProps = (state) => ({
  activeFilter: state.visibilityFilter
})

export default connect(mapStateToProps)(Filter)
