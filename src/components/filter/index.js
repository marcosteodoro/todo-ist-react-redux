'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from 'reducers/visibility-filter/actions'
import { setVisibilityFilter } from 'reducers/visibility-filter/action-creators'
import FilterLink from './filter-link'

const Filter = ({ activeFilter, handleFilter }) => (
  <div>
    <h3>Mostrar</h3>
    {filterItems.map((item) => (
      <FilterLink
        key={item.action}
        action={item.action}
        activeFilter={activeFilter}
        label={item.label}
        onClick={handleFilter(item.action)}
      >
        {item.label}
      </FilterLink>
    ))}
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

const mapDispatchToProps = (dispatch) => ({
  handleFilter: (filter) => (e) => {
    e.preventDefault()
    dispatch(setVisibilityFilter(filter))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
