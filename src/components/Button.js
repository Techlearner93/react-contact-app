import React from 'react'

export default function Button(props) {
    const {
        text,
        color,
        onClick
    } = props

    return (
        <div>
            <button
                className="btn"
                style={{ backgroundColor: color}}
                onClick={onClick}
            >
            {text}
            </button>
        </div>
    )
}