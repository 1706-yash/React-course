import React from 'react'

//Functional Component
// function Greet(){
//     return <h1>Hello, Good Morning! This is a functional Component.</h1>
// }

// const Greet=() => <h1>Hello this is Greet function</h1>
const Greet=(props) => <h1>Hello this is Greet function{props.name}</h1>

export default Greet