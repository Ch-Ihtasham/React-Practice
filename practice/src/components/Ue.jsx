import React, { useEffect, useState } from 'react'

const Ue = () => {
    const [items, setItems] = useState('')



    const [resource, setResource] = useState('posts')
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resource}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resource])
    useEffect
    return (

        <div>
            {/* <div onClick={()=> setNo((preNo)=> preNo + 1)}>hello world{no}</div> */}
            <div>
                <button onClick={() => setResource(preValue => 'posts')} className='bg-white text-black mr-1 px-2'>Post</button>
                <button onClick={() => setResource(preValue => 'comments')} className='bg-white text-black mr-1 px-2'>Comments</button>
                <button onClick={() => setResource(preValue => 'users')} className='bg-white text-black px-2'>Users</button>
            </div>
            <div>{resource}</div>
            {/* {items.map((item,i)=>(
                <pre key={i}>
                    {JSON.stringify(item)}
                </pre>
            ))} */}
            <div>{JSON.stringify(items)}</div>
        </div>
    )
}

export default Ue
