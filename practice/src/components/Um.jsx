import React, { useState } from 'react'

const Um = () => {
    const [num, setNum] = useState(0)
    const [dark, setDark] = useState(false)
    const theme = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }
    function inputValue(e){
        let value=parseInt(e.target.value)
        if(isNaN(value)){
            setNum(0)
        }
        else{
            setNum(preValue => value)
        }

    }
    return (
        <div>
            <input type="number"  onChange={inputValue} />
            <button onClick={()=>setDark(preValue => !preValue)}>Change theme</button>
            <div style={theme}>{num}</div>

        </div>


    )
}

export default Um
