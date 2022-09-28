import React from 'react'

export default function RegularList({
    usersList,
    resourceName,
    itemComponent: ItemComponent
}) {

    return ( 
        usersList.map((item) => 
            <ItemComponent key={item.id} {...{[resourceName]: item}} />
        )
    )
}
