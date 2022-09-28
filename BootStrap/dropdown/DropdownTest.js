import { Dropdown } from "bootstrap";
import {useRef} from 'react'

export default function DropdownTest() {

    const dropdownRef = useRef()

    const ddMenu = () => {
        const menuButton = new Dropdown(dropdownRef.current, {
            display: 'dynamic',
            reference: 'toggle',
            autoClose: true
        })
        menuButton.toggle()

    }

    return (
    <div className="dropdown">
        <button className="btn btn-danger dropdown-toggle" ref={dropdownRef} id="dLabel" type="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={ddMenu}>
            Dropdown trigger
        </button>
        <ul className="dropdown-menu" aria-labelledby="dLabel">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item active" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else there</a></li>
        </ul>
    </div>
    )
}
