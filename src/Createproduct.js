import React from 'react'
import { useFormik } from 'formik';
import axios from "axios";
import {useNavigate} from "react-router-dom"
function  Createproduct() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            websitename: '',
            product: '',
            price:'',
            rating:'',
            imageurl:''
        },
        onSubmit: async (values) => {
            try {
                await axios.post("https://hackathon2backend.herokuapp.com/createproduct",values)
                alert("created successfully")
                 
            } catch (error) {
                console.log(error)
            }
        }
    });

    return (
        <div className='container'>
            <form onSubmit={formik.handleSubmit}>
        <div className='row'>
            
                <div className='col-lg-12'>
                    <label>websitename</label>
                    <input type="text" name='websitename' className='form-control'
                        onChange={formik.handleChange}
                        value={formik.values.websitename} />
                </div>
                <div className='col-lg-12'>
                    <label>product</label>
                    <input type="text" name='product' className='form-control'
                        onChange={formik.handleChange}
                        value={formik.values.product}
                    />
                </div>
                <div className='col-lg-12'>
                    <label>price</label>
                    <input type="text" name='price' className='form-control'
                        onChange={formik.handleChange}
                        value={formik.values.price}
                    />
                </div>
                <div className='col-lg-12'>
                    <label>rating</label>
                    <input type="text" name='rating' className='form-control'
                        onChange={formik.handleChange}
                        value={formik.values.rating}
                    />
                </div>
                <div className='col-lg-12'>
                    <label>imageurl</label>
                    <input type="text" name='imageurl' className='form-control'
                        onChange={formik.handleChange}
                        value={formik.values.imageurl}
                    />
                </div>
                <button className='btn btn-primary mt-3 ml-3'>Submit</button>
            
        </div></form>
        </div>
    )
}

export default Createproduct