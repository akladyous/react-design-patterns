import React from "react";
import Navbar from "./navbar.jsx";

class Home extends React.Component {
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
