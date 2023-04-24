import React from 'react'
import {Link} from 'react-router-dom' 
import LogoSource from './assets/rickandmortylogo.png'
const Header = () => {  
 
  const homeIcon = (
  <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none"
      viewBox="0 0 24 24" 
      strokeWidth="1.5" 
      stroke="#1f2937" 
      className="w-8 h-8 md:w-16 md:h-13 lg:w-16 lg:h-16">
    <path strokeLinecap="round" 
    strokeLinejoin="round"
    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
  )
  return (  
    <div className="px-4 md:px-16 dark:bg-gray-800 border-b border-blue-400 py-2 grid grid-cols-2 sticky z-10 bg-white"> 
        <div className="md:inline-flex md:w-2/3">  
           <img className="w-full" src={LogoSource} alt="logo"/>  
        </div> 
      <Link   
            to='/' 
            className="col-lg-4 gap-2 md:gap-10 lg:gap-16 flex justify-end  items-center col-md-6 col-sm-6 col-12 text-dark "
          >
            <div className='bg-[#fff] rounded-lg flex justify-center items-center shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]'>
              {homeIcon}
            </div>
             
        </Link> 
    </div>   
  )
}

export default Header
