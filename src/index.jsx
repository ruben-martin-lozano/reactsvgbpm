import React from 'react'
import PropTypes from 'prop-types'

const Bpm = ({ bpm }) => {
  if (!bpm) return null

  const viewBox = {
    height: 165,
    width: 189,
    x: -7,
    y: 6
  }

  const centerX = (viewBox.width / 2) + viewBox.x

  return (
    <svg
      className='sb-Bpm'
      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
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
  )
}

Bpm.propTypes = {
  bpm: PropTypes.number.isRequired
}

export default Bpm
