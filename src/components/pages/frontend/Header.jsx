import React from 'react'
import { imgPath } from '../../helpers/functions-general'
import { Link, NavLink } from 'react-router-dom'
import { Search } from 'lucide-react'

const Header = () => {
  return (
    <header className="py-2 bg-black text-white">
        <div className="container">
            <div className="flex justify-between items-center">
            <div className="flex items-center">
                <img src={`${imgPath}/logo-netflix.png`} alt="" className="mr-8"/>
                <ul className="flex gap-5">
                    <NavLink><li>TV Shows</li></NavLink>
                    <NavLink><li>Movies</li></NavLink>
                    <NavLink><li>Recently Added</li></NavLink>
                    <NavLink><li>My List</li></NavLink>
                </ul>
            </div>
            <div>
                <button><Search color='white' size={20}/></button>
            </div>
            </div>
        </div>
    </header>
  )
}

export default Header
