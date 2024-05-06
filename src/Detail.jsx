import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Detail = () => {
    let {id}=useParams()
    const [data,setData]=useState('')
    useEffect(()=>{
       let fetchData=async()=>{
        let response= await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=a5ef1268`)
        console.log(response.data)
        setData(response.data)
       }
       fetchData()
    },[])
  return (
    <div>
       
       {data.Title}
        <img src={data.Poster} alt="" />
        <p>{data.Awards}</p>
       
    </div>
  )
}
