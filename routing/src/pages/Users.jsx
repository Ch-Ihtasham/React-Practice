import React from 'react'
import { useParams } from 'react-router-dom'

export default function Users() {
    const { userid } = useParams()
    return (
        <div>
            this is page for the users {userid}
        </div>
    )
}
