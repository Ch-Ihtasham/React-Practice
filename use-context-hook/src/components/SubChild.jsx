import React from 'react'
import { useContext } from 'react'
import { myContext } from '../context/context'
export default function SubChild() {
    const ans = useContext(myContext)
    return (
        <div>
            this is subchild{ans}
        </div>
    )
}
