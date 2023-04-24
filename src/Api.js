 import axios from 'axios'
 
 const api = axios.create({
    baseURL: `https://rickandmortyapi.com/api`
 }); 
 export const getData =  async(signal) => {
   try{
        const response = await api.get('/character',{ signal })   
        return response.data.results;
        
   }catch(error){
        throw Error(error.message)
   }
 } 