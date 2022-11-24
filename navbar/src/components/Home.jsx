import React from "react";
// import Navbar from "./Navbar.jsx";
// import Navbar from "./NavTemplate.jsx";
import TailwindNav from "./TailwindNav.jsx";

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = { breaPoint: null }
        this.myRef = React.createRef();
        this.getBreakPoint = this.getBreakPoint.bind(this);
    }

    getBreakPoint() {
        let bb = window.getComputedStyle(document.body, ':before').content.replace(/\"/g, '');
        // debugger
        // console.log('this.myref : ', this.myRef)
        console.log('bb: ', bb)
        this.myRef.current.textContent = `Current BreakPoint is ${bb}`
        this.setState({ breakPoint: bb })
    }
    componentDidMount() {
        window.addEventListener('resize', this.getBreakPoint, false)
        // this.setState({ breaPoint: this.getBreakPoint() })
    }
    render() {
        return (
            <>
                {/* <Navbar /> */}
                <TailwindNav />
                <div className="h-1/2 w-1/2 border border-gray-200">

                    <button className="w-fit p-2 rounded-md bg-slate-300" onClick={() => {
                        this.getBreakPoint()
                        this.myRef.current.textContent = `Current BreakPoint is ${this.state.breaPoint}`
                    }}>breakpoint</button>
                    <p className="outline-1" ref={this.myRef}>current breakpoint is : {this.state.breaPoint}</p>
                </div>
            </>
        )
    }
}
