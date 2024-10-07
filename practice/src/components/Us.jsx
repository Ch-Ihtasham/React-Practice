import React, { useState, useEffect, useRef } from 'react'

export default function Us() {
    const [num, setNum] = useState(abc)
    const isInitialRender = useRef(true);  // track initial render
    const a = useRef(0)
    useEffect(() => {
        // Skip the effect on initial render
        // if (isInitialRender.current) {
        //   isInitialRender.current = false;
        //   return;
        // }

        // This will run only after the initial render
        a.current += 1;
        console.log(`Value of a is ${a.current}`);

    }, [num]);
    function abc() {
        console.log('rerender')
        return 8
    }

    // const [num, setNum] = useState({ count: 6, theme: 'blue' })

    const decrement = () => {
        // setNum(preNum => {
        //     return {
        //         ...preNum,
        //         count: preNum.count - 1
        //     }
        // })
        setNum(preNum => preNum - 1)
        setNum(preNum => preNum - 1)
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
        setNum(preNum => preNum + 1)
    }
    console.log('hello world')
    return (
        <div className=''>
            <div className='flex '>
                <div onClick={decrement} className='bg-slate-400 p-1'>-</div>
                <div>{num}</div>

                {/* <div>{num.theme}</div> */}
                <div onClick={increment} className='bg-slate-400 p-1'>+</div>
                <div>this is the value of a {a.current}</div>
            </div>

        </div>
    )
}
