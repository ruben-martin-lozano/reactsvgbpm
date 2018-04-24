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
      <Bpm bpm={60} />
      <Bpm bpm={120} />
      <Bpm bpm={240} />
    </div>
    <Bpm bpm={60} />
    <Bpm bpm={120} />
    <Bpm bpm={240} />
  </Fragment>
)

ReactDOM.render(demo, document.getElementById('demo'))
