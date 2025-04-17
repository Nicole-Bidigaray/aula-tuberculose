'use client'

import React, { Component } from 'react'
import * as Icon from 'react-feather'

interface GoTopState {
  isVisible: boolean
}

export default class GoTop extends Component<object, GoTopState> {
  constructor(props: object) {
    super(props)
    this.state = {
      isVisible: false,
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      this.toggleVisibility()
    })
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        isVisible: true,
      })
    } else {
      this.setState({
        isVisible: false,
      })
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  render() {
    const { isVisible } = this.state
    return (
      <div className="">
        {isVisible && (
          <div className="go-top" onClick={() => this.scrollToTop()}>
            <Icon.ArrowUp />
          </div>
        )}
      </div>
    )
  }
}
