import React from 'react';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";

function Search() {
    const [userList, setUserList] = useState([])
    const formik = useFormik({
        initialValues: {
            key: ''
            },
        onSubmit: async (values) => {
            try {
                
                    console.log(values)
                    let data = await axios.post("https://hackathon2backend.herokuapp.com/key",values);
                    setUserList(data.data); 
                     // console.log(arrdata)
                 
               
            } catch (error) {
                console.log(error)
            }
        }
    });
    return (
        <>
        <div>
            <div className='container'>
            <form onSubmit={formik.handleSubmit}>
        <div className='row'>
            
                <div className='col-lg-6'>
                     
                    <input type="text" name='key' className='form-control'
                        onChange={formik.handleChange}
                        value={formik.values.key} />
                </div> <button className='btn btn-primary ' type='submit'>search</button></div>
                </form>
        </div>
        </div>
        {
                userList.map((user,index) => {
                    return<div className='container'>
                    <div class="card mr-5" key={index}>
                        <img class="card-img-top" src={user.imageurl} alt="Card image cap" />
                        <div class="card-body">
                            <p class="card-title">{`Available in - ${user.websitename}`}</p>
                            <p class="card-title">{`Product - ${user.product}`}</p>
                            <p class="card-title">{`Price - ${user.price}`}</p>
                            <p class="card-title">{`Rating - ${user.rating}`}</p>

                        </div>
                    </div>
                    </div>
                })
            }
        </>
        
    )
}

export default Search
