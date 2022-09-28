import React, {useState, useEffect} from "react"

export default function NoteLoader({noteId, children}){
    const [note, setNote] = useState(null)

    useEffect(()=>{
        fetch(`http://localhost:3501/notes/${noteId}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setNote(data);
            });
    },[noteId])

    return (
        <>
        {
            React.Children.map(children, child => {
                if(React.isValidElement(child)){
                    return React.cloneElement(child, {note})
                }
                return child
            })
        }
        </>
    )
}