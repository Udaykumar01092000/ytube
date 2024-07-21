import React from 'react'
import './sidebar.css'
import home from '../../../assets/home.png'
import game_icon from '../../../assets/game_icon.png'
import automobiles from '../../../assets/automobiles.png'
import sports from '../../../assets/sports.png'
import entertainment from '../../../assets/entertainment.png'
import tech from '../../../assets/tech.png'
import music from '../../../assets/music.png'
import blogs from '../../../assets/blogs.png'
import news from '../../../assets/news.png'
import jack from '../../../assets/jack.png'
import simon from '../../../assets/simon.png'
import tom from '../../../assets/tom.png'
import megan from '../../../assets/megan.png'
import cameron from '../../../assets/cameron.png'

const Sidebar = ({sidebar , category , setCategory}) => {
  return (
    <div className={`sidebar ${sidebar ? " " : "small-sidebar"}`}>
        <div className="shortcut-links">
            <div className= {`side-link ${category == 0 ? "active" : ""}`} onClick={()=>setCategory(0)}>
                <img src = {home} alt="Home"/><p>Home</p>
            </div>
            <div className= {`side-link ${category == 20 ? "active" : ""}`} onClick={()=>setCategory(20)}>
                <img src = {game_icon} alt="Gaming"/><p>Gaming</p>
            </div>
            <div className= {`side-link ${category == 2 ? "active" : ""}`} onClick={()=>setCategory(2)}>
                <img src = {automobiles} alt="Automobiles"/><p>Automobiles</p>
            </div>
            <div className= {`side-link ${category == 17 ? "active" : ""}`} onClick={()=>setCategory(17)}>
                <img src = {sports} alt="Sports"/><p>Sports</p>
            </div>
            <div className= {`side-link ${category == 24 ? "active" : ""}`} onClick={()=>setCategory(24)}>
                <img src = {entertainment} alt="Entertainment"/><p>Entertainment</p>
            </div>
            <div className= {`side-link ${category == 28 ? "active" : ""}`} onClick={()=>setCategory(28)}>
                <img src = {tech} alt="Home"/><p>Technology</p>
            </div>
            <div className= {`side-link ${category == 10 ? "active" : ""}`} onClick={()=>setCategory(10)}>
                <img src = {music} alt="Home"/><p>Music</p>
            </div>
            <div className= {`side-link ${category == 22 ? "active" : ""}`} onClick={()=>setCategory(22)}>
                <img src = {blogs} alt="Home"/><p>Blogs</p>
            </div>
            <div className= {`side-link ${category == 25 ? "active" : ""}`} onClick={()=>setCategory(25)}>
                <img src = {news} alt="Home"/><p>News</p>
            </div>
            <hr/>
        </div>
        <div className="subscribed-list">
            <h3>Subscribe</h3>
            <div className= {`side-link`} onClick={()=>setCategory(0)}>
                <img src = {jack} alt="profile" /><p>PewDiePie</p>
            </div>
            <div className= {`side-link`} onClick={()=>setCategory(0)}>
                <img src = {simon} alt="profile" /><p>Mr Beast</p>
            </div>
            <div className= {`side-link`} onClick={()=>setCategory(0)}>
                <img src = {tom} alt="profile" /><p>Justin Bieber</p>
            </div>
            <div className= {`side-link`} onClick={()=>setCategory(0)}>
                <img src = {megan} alt="profile" /><p>5-Minute Craft</p>
            </div>
            <div className= {`side-link`} onClick={()=>setCategory(0)}>
                <img src = {cameron} alt="profile" /><p>Nas Daily</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar