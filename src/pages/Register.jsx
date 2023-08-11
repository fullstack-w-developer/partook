import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/Login.css";
import axios from "axios";

const Register = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('نام الزامی است.'),
    password: Yup.string().min(6, 'رمز عبور باید حداقل ۶ کاراکتر باشد.').required('رمز عبور الزامی است.'),
  });

  //for delete form after login
  const handleSubmit = async (values, { resetForm }) => {
    try {
      //send a POST request to backend
      const response = await axios.post("http://78.109.200.116:1370/api/Authenticate/RegisterUser");

      if(response.data.success){
        //clear the form
        resetForm(); 
      }
    } catch (error) {
      // handle error
      console.log("Error submiting form:", error);
    }
  };

  return (
    <>
      <div className="headFormLogin flexAlign">
        <span>فرم ثبت نام</span>
      </div>
      <Formik
        initialValues={{ name: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="formValidation flexCol">
          <div className='form flexCol'>
            <div className="w-full flexCol">
              <label htmlFor="name">نام کاربری:</label>
              <Field autoFocus type="text" id="name" name="name" className="nameForm" />
            </div>
            <ErrorMessage name="name" component="div" className='errorText' />
          </div>
          <div className="form flexCol">
            <div className="w-full flexCol">
              <label htmlFor="number">شماره تلفن:</label>
              <Field type="text" id="number" name="number" className="nameForm" />
            </div>
            <ErrorMessage name="name" component="div" className='errorText' />
          </div>
          <div className="form flexCol">
            <div className="w-full flexCol">
              <label htmlFor="password">رمز عبور:</label>
              <Field type="password" id="password" name="password" className="nameForm" />
            </div>
            <ErrorMessage name="password" component="div" className='errorText' />
          </div>
          <div className="form flexCol">
            <div className="flexCol w-full">
              <label htmlFor='passwordAgain'>
                تکرار رمز عبور:
              </label>
              <Field type="password" id="passwordAgain" name="passwordAgain" className="nameForm" />
            </div>
            <ErrorMessage name='password' component="div" className='errorText' />
          </div>

          <button type="submit" className='submitBtn'>ثبت</button>
        </Form>
      </Formik>
    </>
  )
}

export default Register

