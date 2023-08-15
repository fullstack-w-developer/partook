import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom'; // اضافه کردن استفاده از useHistory
import { toast } from 'react-toastify';
import AuthServices from "../services/AuthServices";
import "../styles/Login.css";
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate(); // ایجاد navigate برای استفاده در redirectToVerifyAccount

  const validationSchema = Yup.object().shape({
    userName: Yup.string().required('نام الزامی است.'),
    mobile: Yup.string().required('شماره تلفن الزامی است'),
    password: Yup.string().min(6, 'رمز عبور باید حداقل ۶ کاراکتر باشد.').required('رمز عبور الزامی است.'),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "تکرار رمز عبور مطابقت ندارد.").required("تکرار رمز عبور الزامی است.")
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const userData = {
        userName: values.userName,
        mobile: values.mobile,
        password: values.password,
        confirmPassword: values.confirmPassword,
        verficationCode: values.verficationCode
      };

      const response = await AuthServices.RegisterUserApi(userData);
      resetForm();
      // ارسال درخواست به سرور برای دریافت کد فعالسازی
      const activationCodeResponse = axios.post("http://78.109.200.116:1370/api/Authenticate/GenerateVerificationCodeOnRegisterUser")
      navigate("/verifyaccount", { state: { activationCode: activationCodeResponse.data.code } });
    } catch (error) {
      console.log("Error submitting form:", error);
    }
  };

  return (
    <div>
      <div className="headFormLogin flexAlign">
        <span>فرم ثبت نام</span>
      </div>
      <Formik
        initialValues={{ userName: '', mobile: '', password: '', confirmPassword: '', verficationCode: "string" }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          if (!values.userName || !values.mobile || !values.password || !values.confirmPassword) {
            toast.error("لطفا تمام فیلد ها را پر کنید!");
          } else {
            handleSubmit(values, actions);
          }
        }}
      >
        <Form className="formValidation flexCol">
          <div className='form flexCol'>
            <div className="w-full flexCol">
              <label htmlFor="userName">نام کاربری:</label>
              <Field autoFocus type="text" id="userName" name="userName" className="nameForm" />
            </div>
            <ErrorMessage name="userName" component="div" className='errorText' />
          </div>
          <div className="form flexCol">
            <div className="w-full flexCol">
              <label htmlFor="mobile">شماره تلفن:</label>
              <Field type="text" id="mobile" name="mobile" className="nameForm" />
            </div>
            <ErrorMessage name="mobile" component="div" className='errorText' />
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
              <label htmlFor='confirmPassword'>
                تکرار رمز عبور:
              </label>
              <Field type="password" id="confirmPassword" name="confirmPassword" className="nameForm" />
            </div>
            <ErrorMessage name='confirmPassword' component="div" className='errorText' />
          </div>
          <button type="submit" className='submitBtn'>
            ثبت
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
