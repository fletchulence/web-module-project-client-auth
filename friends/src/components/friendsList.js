import React, { Component } from 'react'
import axios from 'axios';

class friendsList extends Component {
   state={
      friends: []
   };
   
   componentDidMount(){
      this.getFriends()
   };
   
   getFriends = () =>{
      // fetch the friends only if user is authenticated
      axios.get('http://localhost:5002/api/friends', {
         headers: {
            Authorization: localStorage.getItem('token')
         }
      })
         .then(res=>{
            //res.data.data
            this.setState({
            ...this.state,
            friends: res.data.data
            })
         })
         .catch(err=>{
            console.error(err)
         })
   }
   
   render() {
      console.log(this.state.friends)
      return (
         <div>
            {this.state.friends.map((friend, index)=>{
            return(
               {friend}
            )
            })}
         </div>
      )
   }
    
}

export default friendsList;