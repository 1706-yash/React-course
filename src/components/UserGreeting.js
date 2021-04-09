import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props){
       super(props)
       this.state={
           isLoggedIn:true
       }
    }
    render() {
            //if else rendering

            // if(this.state.isLoggedIn){
            //     return <div>Welcome Yash</div>
            // }
            // else{
            //     return <div>Welcome Guest</div>
            // }

            //ternary operator rendering
            // return (
            //     this.state.isLoggedIn ?
            //     <div>Welcome Yash</div>:
            //     <div>Welcome Guest</div>
            // )

            //eLEMENT VARIABLE APPROACH
            let message
            if(this.state.isLoggedIn){
                message= <div>Welcome Yash</div>
            }
            else{
                message= <div>Welcome Guest</div>
            }
        return message
    }
}

export default UserGreeting
