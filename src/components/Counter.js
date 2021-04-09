import React,{Component} from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    //method
    onIncrement(){
        this.setState({
            count:this.state.count+1
    },
    ()=>{
        console.log('Callback Value',this.state.count)
    }
    )
    console.log(this.state.count)
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={()=>this.onIncrement()}>Increment</button>
                              
            </div>
        )
    }
}

export default Counter
