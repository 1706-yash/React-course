import React, { Component } from 'react'
import axios from 'axios'


class customerList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            customers: [],
            search: ''
        }
    }

    onChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    componentDidMount(){
        axios.get('http://localhost:5000/customers').
        then(response => {
            console.log(response);
            this.setState({customers: response.data}, () => {
                console.log("state", this.state);
            })
        }).
        catch((error) => {
            console.log(error)
        })
    }

    deleteHandler = (id) => {
        console.log('Delete Clicked');
        axios.delete('http://localhost:5000/customers/'+id).
        then(response => {
            console.log("delete response", response);
            if(response.status === 200){
                this.setState({customers: this.state.customers.filter((e) => e._id !== id)});
            }
        }).
        catch((error) => {
            console.log(error)
        })
    }

    editHandler = (id) => {
        this.props.history.push('/edit/' + id)
    }
    
    render() {
        return (
            <div className="container">
                <h3>List of Customers</h3>
                <div className="searchContainer">
                    <input type="text" name="search" onChange={this.onChangeHandler} value={this.state.search} placeholder="Search Customer"/>
                </div>

                <table id="customers">
                    <tbody>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        {
                            this.state.customers.map(post => {
                                if(post.first_name.toLowerCase().includes(this.state.search.toLowerCase()))
                                    return(
                                    <tr key={post._id}>
                                        <td>{post.first_name}</td>
                                        <td>{post.last_name}</td>
                                        <td>{post.gender}</td>
                                        <td><button onClick={() => {this.editHandler(post._id)}}>Edit</button></td>
                                        <td><button onClick={() => {this.deleteHandler(post._id)}}>Delete</button></td>
                                    </tr>
                                    );
                                else
                                    return(null);
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default customerList;