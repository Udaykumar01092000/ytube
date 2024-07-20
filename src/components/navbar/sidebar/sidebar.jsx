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

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="shortcut-links">
            <div className="side-link">
                <img src = {home} alt="Home"/><p>Home</p>
            </div>
            <div className="side-link">
                <img src = {game_icon} alt="Gaming"/><p>Gaming</p>
            </div>
            <div className="side-link">
                <img src = {automobiles} alt="Automobiles"/><p>Automobiles</p>
            </div>
            <div className="side-link">
                <img src = {sports} alt="Sports"/><p>Sports</p>
            </div>
            <div className="side-link">
                <img src = {entertainment} alt="Entertainment"/><p>Entertainment</p>
            </div>
            <div className="side-link">
                <img src = {tech} alt="Home"/><p>Technology</p>
            </div>
            <div className="side-link">
                <img src = {music} alt="Home"/><p>Music</p>
            </div>
            <div className="side-link">
                <img src = {blogs} alt="Home"/><p>Blogs</p>
            </div>
            <div className="side-link">
                <img src = {news} alt="Home"/><p>News</p>
            </div>
            <hr/>
        </div>
        <div className="subscribed-list">
            <h3>Subscribe</h3>
            <div className="side-link">
                <img src = {jack} alt="profile" /><p>PewDiePie</p>
            </div>
            <div className="side-link">
                <img src = {simon} alt="profile" /><p>Mr Beast</p>
            </div>
            <div className="side-link">
                <img src = {tom} alt="profile" /><p>Justin Bieber</p>
            </div>
            <div className="side-link">
                <img src = {megan} alt="profile" /><p>5-Minute Craft</p>
            </div>
            <div className="side-link">
                <img src = {cameron} alt="profile" /><p>Nas Daily</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar