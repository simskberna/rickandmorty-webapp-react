import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner"; 
const DetailPage = () => {
  const [isLoading, setIsLoading] = useState(false);  
 
  let { id } = useParams();
  
  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species } = fetchedData;
  const handleStyle = (status) => {
    if (status === 'Alive') {
      return {color : '#00f67b'}
    } else if (status === 'Dead') { 
      return {color : '#ff2c2c' }
    } else {  
      return {color : '#a786ff'}
    }
  }
  let api = `https://rickandmortyapi.com/api/character/${id}`;
  
  useEffect(() => {
    (async function () {
      setIsLoading(true)
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
      setIsLoading(false)
    })();
  }, [api]);

  const renderPage = (
    <div className="flex items-center justify-center w-full h-screen bg-[#1f2937]">
       <div className="cart shadow-2xl rounded-lg lg:w-1/3 w-full  lg:m-20 m-10 flex flex-col flex-wrap items-center justify-center">
    <div className="cart-header bg-[#ffabab34] relative flex items-center justify-center h-[200px] w-full  rounded-t-lg">
      <div className="image-circle flex items-center absolute justify-center rounded-full border-4 border-[#fff] h-[150px] w-[150px]">
        <img className="image h-full w-full rounded-full" alt="profile" src={image}></img>
      </div>
    </div>
    <div className="cart-body bg-[#ff525234] relative flex flex-col justify-around items-center h-[300px] w-full rounded-b-lg">
      <div className="cart-body-header min-w-[200px] max-w-[100px] bg-[#87878740] rounded-md p-2 flex flex-col items-start text-white">
      <h3 className="name"><span className="font-medium">NAME : </span>{name}</h3>
      <h3 className="status" style={handleStyle(status)}><span className="font-medium text-white">STATUS : </span>{status}</h3>
      </div>
        <div className="cart-body-footer min-w-[200px] max-w-[100px] flex flex-col items-start text-white">
          <h6><span className="font-medium">SPECIES : </span>{species}</h6>
          <h6><span className="font-medium">GENDER : </span>{gender}</h6>
          <h6><span className="font-medium">LOCATION : </span>{location?.name}</h6>
          <h6><span className="font-medium">ORIGIN : </span>{origin?.name}</h6>
      </div>
    </div>
  </div>  
   </div>
  )

  return ( 
    <>
    {isLoading ? <LoadingSpinner /> : renderPage }
   </>
  )
}

export default DetailPage
