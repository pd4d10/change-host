import React, { Component } from 'react'
import { readHosts } from './util'
import style from './container.css'

export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hosts: {}
    }
  }

  componentDidMount() {
    readHosts().then(hosts => {
      this.setState({
        hosts
      })
    })
  }

  render() {
    return (
      <ul>
        {
          this.state.hosts.map(({ ip, names }) =>
            <li>
              {ip}, {names}
            </li>
          )
        }
      </ul>
    )
  }
}
