import axios from 'axios';

export const axiosWithAuth =() =>{
   const token = localStorage.getItem('token')
   //? creates an instance of axios with global config setup
   axios.create({
      headers:{
         authotization: token
      }
   })
}