import React, { memo } from 'react'

export default memo(function Navbar({ name,fun }) {
    console.log('navbar is rendering')
    return (
        <div>
            this is {name} navbar {fun()}
        </div>
    )
})
