import React, { Component } from 'react'
import { List, ListItem, Checkbox } from 'material-ui'
import { readHosts, convert, parse } from './util'
import './container.css'

export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hosts: {},
    }
    this.onCheck = this.onCheck.bind(this)
  }

  componentDidMount() {
    readHosts().then((file) => {
      console.log(file)
      // this.setState({
      //   hosts: parse(file),
      // })
    })
  }

  onCheck(ip, name) {
    return (event, isChecked) => {
      this.setState({
        hosts: Object.assign({}, this.state.hosts, {
          [ip]: Object.assign({}, this.state.hosts[ip], {
            [name]: isChecked,
          }),
        }),
      })
    }
  }

  render() {
    const convertedHosts = convert(this.state.hosts)
    return (
      <div>
        <ul>
          {convertedHosts.map(({ ip, hosts }) => (
            <li key={ip}>
              <span>{ip}</span>
              {hosts.map(({ name, active }) => (
                <Checkbox label={name} checked={active} onCheck={this.onCheck(ip, name)} />
              ))}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
