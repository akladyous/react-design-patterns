import UsersLoader from "./UsersLoader.js"
import ListComponent from "../patterns/ListComponent.js"
import ListItem from "../patterns/ListItem.js"

export default function UserContainer(props) {

    return (

        <UsersLoader resourceName="users">
            <ListComponent
                // items='ddd'
                resourceName="user"
                itemComponent={ListItem}
            />
        </UsersLoader>

    )
}
