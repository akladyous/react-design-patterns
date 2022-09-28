import useResourceData from "./useResourceData"

export default function UsersLists({userId}) {
    const getUser = useResourceData(`http://localhost:3601/notes/${userId}`);
    const {resource, loading, error} = getUser;
    const { first_name, last_name, email } = resource || {};

    return (
        <div
            style={{
                border: "1px solid black",
                width: "250px",
                margin: "5px",
                padding: "5px",
            }}
        >
            <h4>{first_name}</h4>
            <h4>{last_name}</h4>
            <h4>{email}</h4>
        </div>
    );
}
