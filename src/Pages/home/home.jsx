import React , {useState} from 'react'
import '../home/home.css'
import Sidebar from '../../components/navbar/sidebar/sidebar'
import Feed from '../../components/feed/feed'

const Home = ({sidebar}) => {

  const [category , setCategory] = useState(0);

  return (
    <div>
        <Sidebar sidebar = {sidebar} category = {category} setCategory = {setCategory}/>
        <div className={`container ${sidebar ? "" : 'large-container'}`}>
          <Feed category = {category}/>
        </div>
    </div>
  )
}

export default Home