import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

export default class Sound extends Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    bpm: PropTypes.number.isRequired,
    waltz: PropTypes.bool.isRequired,
  }

  beatsInMeasure = !this.props.waltz ? 4 : 3
  counter = 0
  interval = (60 / this.props.bpm) * 1000

  play = () => {
    this.high.play()
    this.counter++

    this.playInterval = window.setInterval(() => {
      this.counter % this.beatsInMeasure !== 0 ? this.low.play() : this.high.play()
      this.counter++
    }, this.interval)
  }

  stop = () => {
    this.counter = 0
    window.clearInterval(this.playInterval)
  }

  componentDidMount = () => {
    this.props.active && this.play()
  }

  componentWillReceiveProps = ({ active }) => {
    active ? this.play() : this.stop()
  }

  render = () => {
    return (
      <Fragment>
        <audio ref={node => { this.high = node }}>
          <source src='./sounds/high.wav' type='audio/wav' />
        </audio>
        <audio ref={node => { this.low = node }}>
          <source src='./sounds/low.wav' type='audio/wav' />
        </audio>
      </Fragment>
    )
  }
}
