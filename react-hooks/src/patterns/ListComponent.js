import React from 'react'


export default function ListComponent(props) {
    const {
        items,
        resourceName,
        itemComponent : ItemComponent,
    } = props || {};
    const {loading} = props || false
    console.log("loading: " , loading);
    return (
        <>
        {loading ? <p style={{backgroundColor: "red"}}>loading...</p> : null}
        {
            items && Array.isArray(items) ? 
            items.map( (item, index) => (
                <ItemComponent
                    key={window.crypto.randomUUID()}
                    { ...{ [resourceName]: item } }
                />
            ))
            : null
        }
        </>
    )
}
