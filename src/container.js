import React, { Component } from 'react'
import { parse, stringify } from './util'
import style from './container.css'

export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      json: parse(this.read())
    }
  }

  read() {
    return MacGap.File.read('/etc/hosts', 'string')
  }

  write(host) {
    MacGap.File.write('/etc/hosts', host, 'string')
  }

  backup() {
    const host = MacGap.File.read('/etc/hosts', 'string')
    MacGap.File.write('~/.hosts', host, 'string')
  }

  render() {
    return (
      <div>{JSON.stringify(this.state.json)}</div>
    )
  }
}
