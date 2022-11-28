import { useState, useEffect } from 'react'
import axios from 'axios'

export default function withUser(Component, userId) {
    return props => {
        const [user, setUser] = useState(null);
        useEffect(() => {
            (async () => {
                const response = await axios.get(`user/${userId}`)
                setUser(response.data);
            })();
        }, []);
        return <Component {...props} user={user} />
    };
}
/*
    from the parent component
    const UserInfoWithLoader = withUser(UserInfo, '234')

    function App() {
        return (
            <UserInfoWithLoader />
        )
    }


*/
