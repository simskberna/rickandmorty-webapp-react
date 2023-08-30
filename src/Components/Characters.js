import React,{useEffect, useState} from "react"
import { getData } from "../Api"  
import SingleCharacter from "./SingleCharacter"    
import Pagination from "./Pagination"; 
import LoadingSpinner from './LoadingSpinner'   
const Characters = () => {
    const [isLoading, setIsLoading] = useState(false); 
    const [facts,setFacts] = useState([])   
    const [currentPage, setcurrentPage] = useState(1);
    
    const POST_PER_PAGE = 5
    useEffect(() => { 
        setIsLoading(true); 
        const controller = new AbortController();
        getData(controller.signal)
        .then((response) => {setFacts(response); setIsLoading(false)} )
        .catch((response) => console.log(response));

        return () => {
            controller.abort();
        }
    },[])     
    const paginate = (postNumber) => {setcurrentPage(postNumber)};   

    const firstText = currentPage * POST_PER_PAGE;
    const indexText = firstText - POST_PER_PAGE;
    const CurrentPost = facts.slice(indexText, firstText);
   
    const renderPage = (
        <div>   
            
            <div className="h-full bg-white dark:bg-gray-800 pt-10 md:pt-0 lg:pt-0">  
            <div className="w-full grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 p-10 lg:p-20"> 
            
                {CurrentPost.map((chars, id) => {
                return <SingleCharacter key={id} chars={chars} src={chars.image}/>;
                })} 
                
            </div> 
            </div> 
           
           {<Pagination
                POST_PER_PAGE={POST_PER_PAGE}
                totalPosts={facts.length}
                pageNumber={currentPage}
                paginate={paginate}  
        /> }
        </div> 
    )
    return(  
       <>
        {isLoading ? <LoadingSpinner /> : renderPage }
       </>
        
    )
      
 
  
}
export default Characters