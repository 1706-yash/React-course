import React, { Component } from 'react'
import './Form.css'
import styles from './Form.module.css'
const h2={
    color:"red",
    fontSize:"18px"
}
class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userName:'',
             comments:''
        }
    }
    handleUserNameChange=event=>{
     this.setState({
         userName:event.target.value
     })
    }
    handleComments=event=>{
        this.setState({
            comments:event.target.value
        })
       }

    handleSubmit=event=>{
        alert(`${this.state.userName} ${this.state.comments}`)
        event.preventDefault()   /*stopping the page to refresh after submitting*/
    }
    
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label style={h2}>UserName</label>
                <input type="text" value={this.state.userName} placeholder="Enter UserName" onChange={this.handleUserNameChange}></input>
            </div>
            <div>
                <label className={`primary ${styles.fontx1}`}>Comments</label>
                <input type="text" value={this.state.comments} placeholder="Enter Comment" onChange={this.handleComments}></input>
            </div>
            <button type="submit">Submit</button>
        </form>
        )
    }
}

export default Form




