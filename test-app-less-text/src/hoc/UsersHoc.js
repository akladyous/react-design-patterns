import React from 'react'
import fakeUsers from './fakeUsers.js'
import UserCard from './UserCard.js'

const UsersInfo = fakeUsers(UserCard)

export default function UsersHoc() {
    return <UsersInfo test={"test 1"}/>
}
