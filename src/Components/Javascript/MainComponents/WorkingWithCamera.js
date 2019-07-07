import React, {Component} from 'react'

class WorkingWithCamera extends Component {

    style = {
        backgroundColor: "red"
    };

    render() {
        return (
            <div>
                <h1>
                    Helloooooooooooooooooooooooooooooooooo
                </h1>
            </div>
        )
    }

    componentDidMount() {
        console.log(this.props.location.state.detail)
    }
}

export default WorkingWithCamera;