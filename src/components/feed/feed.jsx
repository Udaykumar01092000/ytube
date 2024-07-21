import React, { useEffect, useState } from 'react'
import './feed.css'
import { Link } from 'react-router-dom'
import { API_KEY, value_convertor } from '../../data'
import moment from 'moment'
import axios from 'axios'

const Feed = ({category}) => {

  let [data , setData] = useState([]);

  useEffect(()=>{
    axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`)
    .then((res)=>{
      setData(res.data.items);
      return res;
    }).catch((rej)=>{
      return rej;
    })
  },[category])

  

  return (
    <div className='feed'>
      {data.map((item , i)=>{
        return <Link to = {`video/${item.snippet.categoryId}/${item.id}`} className='card'>
                <img src = {item.snippet.thumbnails.medium.url} alt="thumbnail1" />
                <h2>{item.snippet.title}</h2>
                <h3>{item.snippet.channelTitle}</h3>
                <p>{value_convertor(item.statistics.viewCount)} Views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
              </Link> 
      })}
    </div>
  )
}

export default Feed