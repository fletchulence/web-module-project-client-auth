import React, { useHistory, Component } from 'react';
import axios from 'axios';

class Login extends Component{
   // you need to have this as a class component s.t. there can be a state
   // need state to be set up where you can reference the credentials in the form of an object
   state={
     credentials:{
       username: '',
       password: '',
     }
   }
 
   handleChange=(e)=>{
     this.setState({
       credentials: {
         ...this.state.credentials,
         [e.target.name]: e.target.value
       }
     })
     // console.log(this.state.credentials)
   }
   
   handleSubmit=(e)=>{
     e.preventDefault();
     axios.post('http://localhost:5002/api/login', this.state.credentials )
       .then(res=>{
         console.log(res)
         localStorage.setItem('token', res.data.payload)
         
       })
       .catch(err=>{
         console.error(err)
       })
   }
 
   render(){
   return (
     <>
   <h2>Login</h2>
   <form onSubmit={this.handleSubmit}>
     <input
       type='text'
       name='username'
       placeholder='type your login'
       value={this.state.credentials.username}
       onChange={this.handleChange}
       />
     <input
       type='text'
       name='password'
       value={this.state.credentials.password}
       placeholder='password'
       onChange={this.handleChange}
     />
     <input type='submit'/>
   </form>
   </>
   )
   }
 }

export default Login;