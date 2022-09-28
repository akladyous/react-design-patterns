import React from 'react'

export default function UsersLists({user}) {
    const {first_name, last_name, email} = user;
    // console.log("userCard-props: ", user)
    return (
        <div style={{border: "1px solid black", width: "250px", margin: "5px", padding: "5px"}}>
            <h4>{first_name}</h4>
            <h4>{last_name}</h4>
            <h4>{email}</h4>
        </div>
    )
}
