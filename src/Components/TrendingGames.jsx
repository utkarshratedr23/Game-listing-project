/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'

function TrendingGames({gameList}) {
    useEffect(()=>{
   console.log(gameList)
    },[])
  return (
    <div className='mt-5'>
        <h2 className='font-bold text -[30px] dark:text-white'>Trending Games</h2>
    
    <div className='hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
      {gameList.map((item,index)=>index<4&&(
        <div className='bg-[#76a8f75e] rounded-lg group
        hover:scale-110 transition-all duration-300 ease-in-out cursor pointer'>
            <img src={item.background_image} 
            className='h-[270px] rounded-lg object-cover'/>
            <h2 className='dark:text-white p-2 text-[20px] font-bold'>{item.name}</h2>
       </div>
      ))}
    </div>
    </div>
  )
}

export default TrendingGames
