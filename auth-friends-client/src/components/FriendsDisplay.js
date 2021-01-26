import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useEffect, useState } from 'react'
export default function FriendsDisplay() {

    const [friends, setFriends]=useState([])

    useEffect(() => {
        axiosWithAuth()
            .get("http://localhost:5000/api/friends")
            .then((res)=>{
                console.log(res.data)
                setFriends(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])
    return (
        <div>
            {friends.map((friend)=>{
               return ( 
               <div>
               <p>{friend.name}</p>
                <p>{friend.age}</p>
                <p>{friend.email}</p>
                </div>)
            })}
        </div>
    )
}
