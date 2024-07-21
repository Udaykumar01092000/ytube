import React from 'react'
import '../video/video.css'
import { Playvideo } from '../../components/playvideo/playvideo'
import Recommended from '../../components/recommended/recommended'

const Video = () => {
  return (
    <div className='play-container'>
        <Playvideo/>
        <Recommended/>
    </div>
  )
}

export default Video