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

  async componentDidMount () {
    const response = await ajax().get('https://apps.widenet.com.br/busca-cep/api/cep.json?code=06233-030')
    this.setState(response)
  }

  render () {
    return (
      <SearchCep {...this.state} />
    )
  }
}

export default SearchCepContainer
