import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/Login.css";
import AuthServices from "../services/AuthServices";
import { Link } from 'react-router-dom';

const Register = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('نام الزامی است.'),
    number: Yup.string().required('شماره تلفن الزامی است'),
    password: Yup.string().min(6, 'رمز عبور باید حداقل ۶ کاراکتر باشد.').required('رمز عبور الزامی است.'),
    passwordAgain: Yup.string().oneOf([Yup.ref("password"), null], "تکرار رمز عبور مطابفت ندارد.").required("تکرار رمز عبور الزامی است.")
  });

  //for delete form after login
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const userData = {
        name: values.name,
        number: values.number,
        password: values.password,
        passwordAgain:values.passwordAgain
      };
      const success = await AuthServices.RegisterUser(userData);
      if (success) {
        resetForm()
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
        initialValues={{ name: '', number: '', password: '', passwordAgain: '' }}
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
            <ErrorMessage name='passwordAgain' component="div" className='errorText' />
          </div>
          <Link to="verifyaccount" className='w-full'>
            <button type="submit" className='submitBtn'>ثبت</button>
          </Link>
        </Form>
      </Formik>
    </>
  )
}

export default Register

