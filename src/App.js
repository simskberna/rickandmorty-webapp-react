import React,{useEffect, useState} from "react"
 import Characters from "./Components/Characters";
 import { BrowserRouter , Routes, Route} from "react-router-dom"; 
 import DetailPage from "./Components/DetailPage";
 import Header from './Components/Header';
function App() {
  
  return (
    <div className="App ">
      
      <React.StrictMode>
        <BrowserRouter> 
        <Header />
            <Routes> 
                <Route path="detail-page/:id" element={<DetailPage />}/> 
                <Route path="/"  element={<Characters />} /> 
            </Routes> 
            
           
        </BrowserRouter>
      </React.StrictMode>
      
    </div>
  );
}

export default App;
