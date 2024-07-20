import React from 'react'
import '../home/home.css'
import Sidebar from '../../components/navbar/sidebar/sidebar'

const Home = ({sidebar}) => {
  return (
    <div>
        <Sidebar sidebar = {sidebar}/>
    </div>
  )
}

export default Home