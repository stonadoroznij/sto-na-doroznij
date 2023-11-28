import React from 'react'

export enum ButtonType {
    fill = 'fill',
    outline = 'outline',
}

interface PropsType {
    children: string
    type?: ButtonType
}

const Button = ({ children, type = ButtonType.fill }: PropsType) => {
    
    
    if (type === 'outline') {
        return (
            <button className="btn text-accent-yellow border border-accent-yellow transition-all duration-500 ease-in-out hover:bg-accent-yellow hover:text-coal-800 hover:shadow-accent-30 mr-4">
                {children}
            </button>
        )
    }

    return (
        <button className="btn bg-accent-yellow text-coal-800 transition-all hover:shadow-accent-30 mr-4">
            {children}
        </button>
    )
}

export default Button
