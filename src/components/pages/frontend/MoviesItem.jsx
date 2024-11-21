import React from 'react'
import { imgPath } from '../../helpers/functions-general'

const MoviesItem = ({item, key}) => {
  return (
        <div className="max-w-[1800px] mx-auto" key={key}>
            <div className="px-5 ">
                <div className="card relative ">
                    <img src={`${imgPath}/${item.img}`} alt="" className='w-[500px] h-[600px]'/>
                    <div className="hover:bg-black/80 w-[500px] h-[600px] absolute bottom-0 ">
                    </div>
                </div>
            </div>
        </div>
  )
}

export default MoviesItem