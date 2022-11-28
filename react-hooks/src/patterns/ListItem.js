
import React from 'react'

export default function ListItem({ user }) {
    // debugger
    return (
        <div className="container border p-2">
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item">{user.name}</li>
                <li className="list-group-item">{user.username}</li>
                <li className="list-group-item">{user.email}</li>
                <li className="list-group-item">{user.phone}</li>
            </ul>
        </div>
    )
};
