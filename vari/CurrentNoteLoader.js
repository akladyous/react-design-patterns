import React, {useState, useEffect} from 'react'

export default function CurrentNoteLoader({children}) {
    const [note, setNote] = useState(null)

    useEffect(() => {
        fetch("http://localhost:3501/notes/1")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setNote(data);
        })
    },[])

    return (
        <>
        {
            React.Children.map(children, child => {
                if(React.isValidElement(child)){
                    return React.cloneElement(child, {note})
                }
                return child;
            })
        }
        </>
    )
}
