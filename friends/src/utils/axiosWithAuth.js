import axios from 'axios';

export const axiosWithAuth =() =>{
   const token = localStorage.getItem('token')
   axios.create({
      headers:{
         authotization: token
      }
   })
}