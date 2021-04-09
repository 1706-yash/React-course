import axios from 'axios'
import React, { Component } from 'react'

class EditUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first_name: '',
            last_name: '',
            gender: ''
        }
    }

    componentDidMount(prevProps,prevState){
        axios.get('http://localhost:5000/customers/'+this.props.match.params.id).
        then((res) => {
            this.setState({
                first_name:res.data.first_name,
                last_name:res.data.last_name,
                gender:res.data.gender
            });
        }).catch((error) => {
            console.log(error)
        })
    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log('add clicked');
        axios.patch('http://localhost:5000/customers', this.props.match.params.id,this.state)
            .then(resp => {
                console.log(resp);
                this.props.history.push('/');
            })
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>First Name</label>
                        <input type="text" name="first_name" onChange={this.changeHandler} value={this.state.first_name} />
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

export default EditUser
