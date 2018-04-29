import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import Bpm from '../src/index.jsx'

const demo = (
  <Fragment>
    <div className='demo-Custom'>
      <Bpm bpm={60} />
      <Bpm bpm={120} />
      <Bpm bpm={240} />
    </div>
    <div className='demo-Inverse'>
      <Bpm bpm={60} metronome active sound />
      <Bpm bpm={120} metronome active />
      <Bpm bpm={240} metronome active />
    </div>
    <Bpm bpm={60} metronome sound waltz />
    <Bpm bpm={190} metronome sound />
    <Bpm bpm={240} metronome sound />
  </Fragment>
)

const demo2 = (
  <div className='demo-Custom'>
    <Bpm bpm={90} metronome sound waltz />
  </div>
)

ReactDOM.render(demo2, document.getElementById('demo'))
