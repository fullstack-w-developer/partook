import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/Login.css";

const Login = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('نام الزامی است.'),
    email: Yup.string().email('ایمیل معتبر نیست.').required('ایمیل الزامی است.'),
    password: Yup.string().min(6, 'رمز عبور باید حداقل ۶ کاراکتر باشد.').required('رمز عبور الزامی است.'),
  });

  //for delete form after login
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
  };

  return (
    <>
      <div className="headFormLogin flexAlign">
        <span>فرم ثبت نام</span>
      </div>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="formValidation flexCol">
          <div className='form flexCol'>
            <div className="w-full flexCol">
              <label htmlFor="name">نام کاربری:</label>
              <Field type="text" id="name" name="name" className="nameForm" />
            </div>
            <ErrorMessage name="name" component="div" className='errorText' />
          </div>

          <div className="form flexCol">
            <div className="w-full flexCol">
              <label htmlFor="email">شماره تلفن:</label>
              <Field type="type" id="number" name="number" className="nameForm" /></div>
            <ErrorMessage name="email" component="div" className='errorText' />
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
              <label htmlFor='password'>
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

export default Login

