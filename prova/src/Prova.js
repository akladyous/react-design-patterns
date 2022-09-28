import { render } from "@testing-library/react";
import react from "react";

export default class Prova react.Component{
    constructor(props){
        super(props)
        this.state = {
            counter: 0,
            display: false
        }
        this.increment = () => this.setState({counter: this.state.counter + 1})
        this.decrement = () => this.setState({counter: this.state.counter - 1})
        this.delete = () => this.setState({display: !this.state.display})
    };

    ComponentWillMount(){
        console.log(" component will mount")
    }
    
    ComponentDidMount(){
        console.log("component did mout")
    }

    render(){
        return(
            <div>
                counter={this.increment}
            </div>
        )
    }
}