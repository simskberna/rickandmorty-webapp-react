 import React from "react";
 import Characters from "./Characters";
 import { BrowserRouter , Routes, Route} from "react-router-dom"; 
 import DetailPage from "./DetailPage";
 import Header from './Header';
function App() {
  
  return (
    <div className="App">
      
      <React.StrictMode>
        <BrowserRouter> 
        <Header />
            <Routes> 
                <Route path="detail-page/:id" element={<DetailPage />}/> 
                <Route path="/" element={<Characters />} />
            </Routes> 
            
           
        </BrowserRouter>
      </React.StrictMode>
      
    </div>
  );
}

export default App;
