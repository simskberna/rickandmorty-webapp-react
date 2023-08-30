import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'; 
import { Link } from 'react-router-dom' ; 
const SingleCharacter = ({chars,src}) => {   
   
  return (
    <> 
      <Link 
        key={chars.id} 
        id={chars.id}
        to={`detail-page/${chars.id}`} 
        className=" rounded-md col-lg-4 col-md-6 col-sm-6 col-12 mb-4 p-2 pb-4 position-relative text-dark  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
      > 
        <div key={chars.id} className="group relative">
        <div className="min-h-20 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <LazyLoadImage 
            src={src}
            alt={chars.name}
            className=" h-full w-full object-cover object-center lg:h-full lg:w-full "
        />
          <div> 
        </div>
      
        </div>
        <div className="mt-4 flex justify-between">
        <div>
            <h3 className="text-sm text-gray-700">
            
                <span  
                aria-hidden="true"
                className="dark:text-white inset-0"
                  >
                {chars.name}
                </span> 
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-white" >{chars.species}</p>
        </div>
        <p className={chars.status === 'Alive' ? "text-sm font-medium text-green-400" 
         : chars.status === 'Dead' ? "text-sm font-medium text-red-500" : "text-sm font-medium text-purple-700"}>
          {chars.status}
          </p>
        </div>
          <div className='h-11 flex items-end'>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-teal-600 bg-teal-200
               last:mr-0 mr-1">
              {chars.origin.name}
            </span>
          </div>
              
        </div>
      </Link>
    </>
  )
}

export default SingleCharacter
