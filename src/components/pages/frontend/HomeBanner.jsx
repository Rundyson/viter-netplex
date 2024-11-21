import React from 'react'
import { imgPath } from '../../helpers/functions-general'
import { Play } from 'lucide-react'

const HomeBanner = () => {
  return (
    <section className="relative">
    <img src={`${imgPath}/k-drama-1.png`} alt="" className="w-full h-screen object-cover"/>
    <div className="absolute bottom-1/2 left-[200px] text-white flex flex-col gap-5">
        <small>1990 Comedy 1h  50min</small>
        <h1>Spider-man: No Way Home</h1>
        <small>detail 1</small>
        <small>detal 2</small>
        <div className="flex gap-2 h-[2rem]">
            <button className="bg-red-600 py-2 px-3 rounded-md text-sm flex items-center gap-2 hover:bg-black"><Play fill="white" size={16}/>Play</button>
            <button className="bg-black py-2 px-3 rounded-md text-sm items-center flex hover:bg-red-600">More Info</button>
        </div>
    </div>
    </section>
  )
}

export default HomeBanner