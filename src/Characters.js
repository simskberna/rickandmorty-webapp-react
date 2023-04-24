import React,{useEffect, useState} from "react"
import { getData } from "./Api" 
import SingleCharacter from "./SingleCharacter"    
import Pagination from "./Pagination"; 
import LoadingSpinner from './LoadingSpinner'  
const Characters = () => {
    const [isLoading, setIsLoading] = useState(false);
     
    const [facts,setFacts] = useState([])   
    const [currentPage, setcurrentPage] = useState(1);
    const [postPerPage] = useState(8);
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
    const firstText = currentPage * postPerPage;
    const indexText = firstText - postPerPage;
    const CurrentPost = facts.slice(indexText, firstText);
    const paginate = (postNumber) => setcurrentPage(postNumber); 
    const renderPage = (
        <div>  
            
            <div className="overflow-hidden bg-white dark:bg-gray-800 pt-10 md:pt-0 lg:pt-0">  
            <div className="mt-2 p-4 md:p-16 pt-0 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 "> 
            
                {CurrentPost.map((chars, id) => {
                return <SingleCharacter key={id} chars={chars} src={chars.image}/>;
                })} 
                
            </div> 
            </div> 
            <Pagination
                postPerPage={postPerPage}
                totalPosts={facts.length}
                paginate={paginate}
        />
        </div> 
    )
    return(  
       <>
        {isLoading ? <LoadingSpinner /> : renderPage }
       </>
        
    )
      
}
export default Characters