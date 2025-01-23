import React, { useRef, useState } from 'react'

const StopWatch = () => {
    const [time, setTime] = useState(null)
    const [now, setNow] = useState(null)
    const intervalRef = useRef(null)
    const [btn, setBtn] = useState(true)

    // const btnRef = useRef(null)
    // console.log(btnRef.current)

    // let abc = null
    function start() {
        setTime(Date.now())
        setNow(Date.now())
        clearInterval(intervalRef.current)
        intervalRef.current = setInterval(() => {
            setNow(Date.now())
        });
    }

    function stop() {
        clearInterval(intervalRef.current)
    }
    let timePassed = (now - time) / 1000


    return (
        <div>
            <button onClick={() => {
                btn ? start() : stop(),
                setBtn(preValue => !preValue)
            }}>{btn ? 'start' : 'stop'}</button>
            <div>the seconds are{time && now ? timePassed.toFixed(3) : 0}</div>
            <button onClick={start} className='bg-white text-black px-2 mr-3'>start</button>
            <button onClick={stop} className='bg-white text-black px-2'>stop</button>

        </div>
    )
}

export default StopWatch
