import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const viewBox = {
  height: 165,
  width: 189,
  x: -7,
  y: 6
}
const centerX = (viewBox.width / 2) + viewBox.x

export default class Bpm extends Component {
  state = {
    active: this.props.active && this.props.metronome
  }

  static propTypes = {
    active: PropTypes.bool,
    bpm: PropTypes.number.isRequired,
    metronome: PropTypes.bool,
    sound: PropTypes.bool,
    waltz: PropTypes.bool,
  }

  static defaultProps = {
    active: false,
    metronome: false,
    sound: false,
    waltz: false
  }

  play = () => {
    const {bpm, sound, waltz} = this.props

    if (!sound) return null

    const {active} = this.state
    this.counter = 0

    if (active) {
      const beatsInMeasure = !waltz ? 4 : 3
      this.high.play()
      this.counter++

      this.playInterval = window.setInterval(() => {
        this.counter % beatsInMeasure !== 0 ? this.low.play() : this.high.play()
        this.counter++
      }, (60 / bpm) * 1000)
    } else {
      window.clearInterval(this.playInterval)
    }
  }

  onClick = () => this.props.metronome && this.setState({
    active: !this.state.active
  }, this.play)

  componentDidMount = () => {
    const {sound} = this.props

    sound && this.state.active && this.play()
  }

  render = () => {
    const {bpm} = this.props

    if (!bpm) return null

    const baseClassName = cx('sb-Bpm', {
      'sb-Bpm--metronome': this.props.metronome,
      'sb-Bpm--active': this.state.active
    })

    return (
      <Fragment>
        <svg
          className={baseClassName}
          viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
          onClick={() => this.onClick()}
          style={{
            animationDuration: `${60 / bpm}s`
          }}
        >
          <path className='sb-BpmHeart' d='M150.383,18.301c-7.13-3.928-15.308-6.187-24.033-6.187c-15.394,0-29.18,7.015-38.283,18.015
            c-9.146-11-22.919-18.015-38.334-18.015c-8.704,0-16.867,2.259-24.013,6.187C10.388,26.792,0,43.117,0,61.878
            C0,67.249,0.874,72.4,2.457,77.219c8.537,38.374,85.61,86.771,85.61,86.771s77.022-48.396,85.571-86.771
            c1.583-4.819,2.466-9.977,2.466-15.341C176.104,43.124,165.716,26.804,150.383,18.301z' />
          <text className='sb-BpmValue' x={centerX} y={viewBox.height / 1.7} textAnchor='middle' fill='#ffffff'>
            {bpm}
          </text>
          <text className='sb-BpmUnit' x={centerX} y={viewBox.height / 1.3} textAnchor='middle' fill='#ffffff'>
            bpm
          </text>
        </svg>
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
