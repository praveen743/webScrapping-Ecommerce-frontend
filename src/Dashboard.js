import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
function Dashboard() {
    const [userList, setUserList] = useState([])
    useEffect(() => {
        fetchUsers()
    }, [])

    let fetchUsers = async () => {
        try {
            let userData = await axios.get("https://hackathon2backend.herokuapp.com/dash");
            setUserList(userData.data)
        } catch (error) {
            console.log(error)
        }
    }
 return (
        <>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'></div>
                <div className='col-lg-6'></div>
                </div>
        </div>
            {
                userList.map((user) => {
                    return<div class="card mr-5">
                        <img class="card-img-top" src={user.imageurl} alt="Card image cap" />
                        <div class="card-body">
                            <p class="card-title">{`Available in - ${user.websitename}`}</p>
                            <p class="card-title">{`Product - ${user.product}`}</p>
                            <p class="card-title">{`Price - ${user.price}`}</p>
                            <p class="card-title">{`Rating - ${user.rating}`}</p>

                        </div>
                    </div>
                })
            }

        </>
    )

}
export default Dashboard
