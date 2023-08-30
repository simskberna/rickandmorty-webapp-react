import React from 'react'
import {Link} from 'react-router-dom' 
import LogoSource from '../assets/rickandmortylogo.png'
const Header = () => {  
 
   
  return (  
    <div className="px-4 md:px-16 dark:bg-gray-800 border-b border-blue-400 py-2 grid grid-cols-2 sticky z-10 bg-white"> 
        <Link   
            to='/' 
            className="col-lg-4 gap-2 md:gap-10 lg:gap-16 flex justify-start  items-center col-md-6 col-sm-6 col-12 text-dark "
          >
          <div className="md:inline-flex md:w-2/3">  
            <img className="w-full" src={LogoSource} alt="logo"/>  
          </div>    
        </Link>
    
    </div>   
  )
}

export default Header
