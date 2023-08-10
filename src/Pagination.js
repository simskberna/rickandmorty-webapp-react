/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

const Pagination = ({ totalPosts, POST_PER_PAGE, paginate }) => {
  const postNumbers = [];  
  for (let i = 1; i <= Math.ceil(totalPosts / POST_PER_PAGE); i++) {
    postNumbers.push(i);
  }    
  const[prev,setPrev] = useState(0);
  const[next,setNext] = useState(0);  
  return (
    <nav className="flex justify-center dark:bg-gray-800 pb-5" aria-label="Page navigation">
    <ul className="inline-flex items-center -space-x-px">
        <li>
        <a onClick={() => {prev < postNumbers.length && prev > 0 ? paginate(prev) : paginate(postNumbers[0])}} className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span className="sr-only">Previous</span>
            <svg aria-hidden="true" className="cursor-pointer w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1
            0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd">
            </path>
            </svg>
        </a>
        </li>
        {postNumbers.map((number) => ( 
            
          <li key={number} className="cursor-pointer page-item z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50
          hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
            <a onClick={() => {
                paginate(number)
                setNext(number+1)
                setPrev(number-1)
            }} className="page-link">
              {number}
            </a>
          </li>
        ))}
        
        <li>
        <a onClick={() => {next <= postNumbers.length && next > 1 ? paginate(next) : paginate(postNumbers.length)}}  className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span className="sr-only">Next</span>
            <svg aria-hidden="true" className="cursor-pointer w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 
            1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd">
            </path>
        </svg>
        </a>
        </li>
    </ul>
    </nav>
        
  );
};

export default Pagination;