import ProfileClass from "./ProfileClass";
import { Component } from "react";

class About extends Component {

    constructor(props) {
        super(props);
        console.log('Parent - constructor');
    }

    render() {
        console.log('Parent - render');
        return (
            <div>
                <h1>About Us Page</h1>
                <p>This is the Hello About Us - Routing lesson</p>
                <ProfileClass name="Piy"/>
            </div>
        );
    }

    componentDidMount() {
        console.log('Parent - componentDidMount');
    }
}

export default About;

/*
Parent - constructor
Parent - render
    Child - constructor
    Child - render
    Child - componentDidMount
Parent - componentDidMount
 */
