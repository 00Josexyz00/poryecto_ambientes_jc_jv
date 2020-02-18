import React,{Component} from "react";
import Pet from "../ services/mascota";

export default class Mascota extends Component{
    state = {
        title: "",
        description: "",
    };

    componentDidMount() {
        console.log('this.props.Mascota', this.props.Pet);
        if(this.props.task) {
            this.setState({
                title: this.props.task.title,
                description: this.props.task.description,
            })
        }
    }


    render() {
        return <div>


        </div>
    }

}