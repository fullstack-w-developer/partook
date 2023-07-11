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

  const handleSubmit = (values, { resetForm }) => {
    // دستوراتی که بعد از ثبت فرم انجام میشوند
    console.log(values);
    resetForm(); // برای پاک کردن فرم پس از ثبت
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="formValidation flexCol">
        <div className='form flexCol'>
          <div className="nameForm flexAlign">
            <label htmlFor="name">نام کاربری:</label>
            <Field type="text" id="name" name="name" className="inputForm" />
          </div>
          <ErrorMessage name="name" component="div" className='errorText' />
        </div>

        <div className="form flexCol">
          <div className="nameForm flexAlign">
            <label htmlFor="email">شماره تلفن:</label>
            <Field type="number" id="number" name="number" className="inputForm" /></div>
          <ErrorMessage name="email" component="div" className='errorText' />
        </div>

        <div className="form flexCol">
          <div className="nameForm flexAlign">
            <label htmlFor="password">رمز عبور:</label>
            <Field type="password" id="password" name="password" className="inputForm" />
          </div>
          <ErrorMessage name="password" component="div" className='errorText' />
        </div>
        <div className="form flexCol">
          <div className="flexAlign nameForm">
            <label htmlFor='password'>
              تکرار رمز عبور:
            </label>
            <Field type="password" id="password" name="password" className="inputForm" />
          </div>
          <ErrorMessage name='password' component="div" className='errorText' />
        </div>

        <button type="submit" className='submitBtn'>ثبت</button>
      </Form>
    </Formik>
  )
}

export default Login

