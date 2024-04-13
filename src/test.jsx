import React from "react" 
var interval;
class Timer extends React.Component{
    constructor(){
        super();
        this.state = {
            time :3
        }
    }



    componentDidMount(){
       interval= setInterval(()=>{
            this.setState({
                time: this.state.time - 1
            })
        },1000)
    }
        componentDidUpdate(){
            if(this.state.time == 0){
                clearInterval(interval);
            }
        }
        componentWillUnmount(){

        }
    
    render(){
        return(
            <p>it is {this.state.time}</p>
        )
    }
}


export default Timer;
