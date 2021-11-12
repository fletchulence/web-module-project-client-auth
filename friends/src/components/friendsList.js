import React, { Component, Fragment as frag } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { withRouter } from 'react-router';

class friendsList extends Component {
   state={
      friends: []
   };

   
   componentDidMount(){
      this.getFriends()
      console.log(this.state.friends)

   };
   
   getFriends = () =>{
      //! fetch the friends ONLY if user is authenticated
      const token = localStorage.getItem('token')
      axios.get('http://localhost:5002/api/friends', /* this is your config object */{
         headers: {
            Authorization: token
         }
      })
         .then(res=>{
            console.log(res.data)
            this.setState({
            ...this.state,
            friends: res.data
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
            <h2>Current Friends</h2>
            <div>
            {this.state.friends.map((friend, index)=>{
               console.log(friend)
            return(
               <React.Fragment key={friend.id}>
                  <p>{friend.name}</p>
                  <p>{friend.email}</p>
                  <p>{friend.age}</p>
               </React.Fragment>
            )
            })}
            </div>
               <div>
                  <h2> Dont see someone here? </h2>
                  <h5> Add a <Link to='/newFriend'> new friend </Link>!</h5>
               </div>
         </div>
      )
   }
    
}

export default friendsList;