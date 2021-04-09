import axios from 'axios'
import React, { Component } from 'react'

class AddCustomer extends Component {
    constructor(props) {
        super(props)
        this.inputRef= React.createRef()
        this.state = {
            first_name: "",
            last_name: "",
            gender: ""
        }
    }
    componentDidMount(){
         this.inputRef.current.focus()
         console.log(this.inputRef)
    }

    changeHandler = (event) => {
        alert(this.inputRef.current.value)
        this.setState({ [event.target.name]: event.target.value })
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log('add clicked');
        axios.post('http://localhost:5000/customers', this.state)
            .then(resp => {
                console.log(resp);
                if(resp.status === 200){
                    this.props.history.push('/');
                }
            })
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>First Name</label>
                        <input type="text" name="first_name" onChange={this.changeHandler} value={this.state.first_name} ref={this.inputRef}/>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" name="last_name" onChange={this.changeHandler} value={this.state.last_name} />
                    </div>
                    <div>
                        <label>Gender</label>
                        <input type="text" name="gender" onChange={this.changeHandler} value={this.state.gender} />
                    </div>
                    <button onClick={this.submitHandler}>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddCustomer
