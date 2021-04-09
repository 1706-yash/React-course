import React,{Component} from 'react';

// the html used inside Javascript is called JSX
//class component -> Here we also need to import {Component}
class Welcome extends Component{
    render(){
        // return <h1>Welcome Everyone!!</h1>
        return <h1>Welcome,{this.props.name} aka {this.props.HeroName}</h1>
    }
}
export default Welcome