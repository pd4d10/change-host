import React, { Component } from 'react'
import { List, ListItem, Dialog, Checkbox } from 'material-ui'
import { readHosts } from './util'
import Modal from './Modal'
import './container.css'

export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hosts: [],
      isVisible: false,
      activeKey: -1,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    readHosts().then((hosts) => {
      this.setState({
        hosts,
      })
    })
  }

  handleClick(index) {
    return () => this.setState({
      isVisible: true,
      activeKey: index,
    })
  }

  render() {
    return (
      <div>
        <List>
          {this.state.hosts.map(({ ip, names }, index) =>
            <ListItem key={index}>
              <span>{ip}</span>
              <div onClick={this.handleClick(index)}>click</div>
            </ListItem>,
            )}
        </List>
        <Modal
          names={this.state.hosts[this.state.activeKey] ? this.state.hosts[this.state.activeKey].names : []}
          isVisible={this.state.isVisible}
        />
      </div>
    )
  }
}
