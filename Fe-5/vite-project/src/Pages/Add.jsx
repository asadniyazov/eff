import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
function Add() {
  return (
   <>
    <Formik
       initialValues={{ name: '', img: '', price: '' }}
       validationSchema={Yup.object({
         name: Yup.string()
   
           .required('Required'),
         img: Yup.string()
       
           .required('Required'),
         price: Yup.number()
       })}
       onSubmit={(values) => {
        fetch("http://localhost:3100/shop",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(values)
})
       }}
     >
       <Form>
         <label htmlFor="name">Name</label>
         <Field name="name" type="text" />
         <ErrorMessage name="name" />
 
         <label htmlFor="img">Last Name</label>
         <Field name="img" type="text" />
         <ErrorMessage name="img" />
 
         <label htmlFor="price">price Address</label>
         <Field name="price" type="price" />
         <ErrorMessage name="price" />
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
   </>
  )
}

export default Add