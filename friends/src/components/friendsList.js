import React, { Component } from 'react'
import axios from 'axios';

class friendsList extends Component {
   state={
      friends: []
   };
   
   componentDidMount(){
      this.getFriends()
      console.log(this.state.friends)
   };
   
   getFriends = () =>{
      // fetch the friends only if user is authenticated
      axios.get('http://localhost:5002/api/friends', {
         headers: {
            Authorization: localStorage.getItem('token')
         }
      })
         .then(res=>{
            console.log(res.data.data)
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
      console.log(this.friends)
      return (
         <div>
            <h2>Current Friends</h2>
            <div>
            {this.state.friends.map((friend, index)=>{
            return(
               <p>
                  {friend}
               </p>
            )
            })}
            </div>
         </div>
      )
   }
    
}

export default friendsList;