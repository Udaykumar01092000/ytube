import React from 'react'
import '../home/home.css'
import Sidebar from '../../components/navbar/sidebar/sidebar'
import Feed from '../../components/feed/feed'

const Home = ({sidebar}) => {
  return (
    <div>
        <Sidebar sidebar = {sidebar}/>
        <div className={`container ${sidebar ? "" : 'large-container'}`}>
          <Feed/>
        </div>
    </div>
  )
}

export default Home