import React,{Component} from "react";

export default class Mascota extends Component{
    state = {
        title: "",
        description: "",
    };

    componentDidMount() {
        console.log('this.props.task', this.props.task);
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