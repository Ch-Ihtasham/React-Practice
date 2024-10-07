import React, { useState, useEffect } from 'react'

export default function Us() {


    function abc() {
        console.log('rerender')
        return 8
    }

    // const [num, setNum] = useState({ count: 6, theme: 'blue' })
    const [num, setNum] = useState(abc)
    const decrement = () => {
        // setNum(preNum => {
        //     return {
        //         ...preNum,
        //         count: preNum.count - 1
        //     }
        // })
        setNum(preNum => preNum -1)
        setNum(preNum => preNum -1)
        // setNum(num - 1)
        // setNum(num - 1)
    }
    const increment = () => {
        // setNum(preNum => {
        //     return {
        //         ...preNum,
        //         count: preNum.count + 1
        //     }
        // })
    }
    console.log('hello world')
    return (
        <div className=''>
            <div className='flex '>
                <div onClick={decrement} className='bg-slate-400 p-1'>-</div>
                <div>{num}</div>
                {/* <div>{num.theme}</div> */}
                <div onClick={increment} className='bg-slate-400 p-1'>+</div>
            </div>

        </div>
    )
}
