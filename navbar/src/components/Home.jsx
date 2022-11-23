import React from "react";
import Navbar from "./Navbar.jsx";

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <>
                <Navbar />
            </>
        )
    }
}
