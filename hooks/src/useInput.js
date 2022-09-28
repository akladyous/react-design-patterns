import {useState} from 'react'

export const useInput = intialValue =>{
    const [value, setValue] = useState(intialValue);
    return [
        {
            value,
            onchange: (e) => setValue(e.target.value)
        },
        () => setValue(intialValue)
    ];
};