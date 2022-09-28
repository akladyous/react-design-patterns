import ListComponent from "../patterns/ListComponent.js"
import ListItem from "../patterns/ListItem.js"
import UsersLoader from "./UsersLoader.js"

export default function UserContainer(props) {
    
    return (

        <UsersLoader resourceName="prova">
            <ListComponent
                // items='ddd'
                resourceName="user"
                itemComponent={ListItem}
            />
        </UsersLoader>
        
    )
}
