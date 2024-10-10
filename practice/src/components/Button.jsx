import React from 'react'

export default function Button() {

    return (
        <div>
            <button> one</button>
            <Btn />
            <Btn3 />
        </div>
    )
}
const Btn = () => {
    return (
        <div><button>two</button></div>
    )
}
export  function Btn3() {
    return (
        <button>three</button>
    )
}

