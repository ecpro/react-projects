import {Component} from "react";

class ProfileClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: props.name,
                location: 'Udaipur'
            },
            count: 0
        }
        console.log('Child - constructor');
    }

    render() {
        console.log('Child - render');
        return (
            <div>
                <h1> Profile Class Component </h1>
                <img src={this.state.userInfo.avatar_url}/>
                <h2>Name: {this.state.userInfo.name}</h2>
                <h2>Location: {this.state.userInfo.location}</h2>
                <h4 onClick={() => { this.setState({count: 23} )}}>Location: {this.state.userInfo.location}</h4>
            </div>
        )
    }

    componentDidMount() {
        console.log('Child - componentDidMount');
        this.timer = setInterval(() => {
            console.log('componentDidMount called');
        },1000);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.timer);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('prevState', prevState);
        if(this.state.count !== prevState.count) {
            console.log('count updated');
        }
        console.log('ComponentDidUpdate');
    }

}

export default ProfileClass;
