import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner"; 
const DetailPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species } = fetchedData;

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
    <div className="h-screen w-full bg-[url('/src/assets/bgwallpaper.jpg')]">
    <div className="w-full h-screen flex items-center flex-col justify-center backdrop-blur-sm">
      <div className="absolute top-0 flex items-center items-center justify-center w-full">
      <div className="bg-[url('../src/assets/greenportal.png')] bg-contain bg-center w-[400px] h-[400px]">
        </div> 
      <img className="absolute h-56 w-62 img-fluid rounded-full shadow-2xl shadow-black" src={image} alt="" /> 
      </div> 
   
    <div className="mt-36 relative content text-white">
      <div className="">
        <span className="fw-bold">Gender : </span>
        {gender}
      </div>
      <div className="">
        <span className="fw-bold">Location: </span>
        {location?.name}
      </div>
      <div className="">
        <span className="fw-bold">Origin: </span>
        {origin?.name}
      </div>
      <div className="">
        <span className="fw-bold">Species: </span>
        {species}
      </div>
      {(() => {
      if (status === "Dead") {
        return <div className="badge bg-danger fs-5 text-white">{status}</div>;
      } else if (status === "Alive") {
        return <div className="badge bg-success fs-5 text-white">{status}</div>;
      } else {
        return <div className="badge bg-secondary fs-5 text-white">{status}</div>;
      }
    })()}
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
