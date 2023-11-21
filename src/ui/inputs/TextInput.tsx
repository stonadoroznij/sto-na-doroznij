import React from 'react'

interface PropsType {
    placeholder: string;
    value: string;
    handleChange: (value: string) => void;
}

const TextInput = ({placeholder, value, handleChange} : PropsType) => {
    return (
        <input
            placeholder={placeholder}
            value={value}
            className=" bg-coal-800 bg-opacity-0 pb-2 outline-none border-b border-white focus:border-accent-yellow"
            onChange={(e) => handleChange(e.target.value)}
        />
    )
}

export default TextInput
