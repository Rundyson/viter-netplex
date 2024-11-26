import React from 'react'
import Banner from './Banner'
import SliderMovie from './SliderMovie'

const Homepage = () => {
  return (
    <>
    <Banner/>
    <div className="py-24 mt-20 bg-dark">
    <SliderMovie title="K-Drama" filter="Kdrama"/>
    <SliderMovie title="Anime" filter="Anime"/>
    <SliderMovie title="International" filter="International"/>

    </div>
    </>
   
  )
}

export default Homepage