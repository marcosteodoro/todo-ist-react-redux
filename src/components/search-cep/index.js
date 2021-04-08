'use strict'

import React, { PureComponent } from 'react'
import ajax from '@fdaciuk/ajax'
import SearchCep from './search-cep'

class SearchCepContainer extends PureComponent {
  state = {
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 200
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    const cep = e.target.cep.value

    const response = await ajax().get('https://apps.widenet.com.br/busca-cep/api/cep.json', { code: cep })
    this.setState(response)
  }

  render () {
    return (
      <SearchCep
        {...this.state}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default SearchCepContainer
