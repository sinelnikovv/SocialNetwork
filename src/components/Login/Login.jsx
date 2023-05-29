import React from "react";
//import LoginForm from "../forms/LoginForm";
//import { connect } from "react-redux";
//import { login } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";
import { useGetCaptchaUrlQuery, useLoginMutation, useMeQuery } from "../../api/apiSlice";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


//import { Field, reduxForm } from "redux-form";
//import s from "./FormsControl/FormsControls.module.scss";
//import { required } from "../../utils/validators/validator";
//import { Element } from "./FormsControl/FormsControls";


const Login = (props) => {
  const me = useMeQuery(undefined, {
    selectFromResult: ({ data }) => ({
      me: data.data,
    }),
  });


  const loginSchema = yup.object().shape({
    email: yup
    .string("email should be a string")
    .email("please provide a valid email address")
    .required("email address is required"),      
   password: yup
    .string("password should be a string")
    .min(5, "password should have a minimum length of 5")
    .max(12, "password should have a maximum length of 12")
    .required("password is required"),
    captcha: yup     
    .string() 
    .required("captcha is required"),
    
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({    
    resolver: yupResolver(loginSchema),
    
  });

  const {data, isLoading, isSuccess, isError} = useGetCaptchaUrlQuery();  
  
  

  const [sendLogin] = useLoginMutation();  

  const formSubmitHandler = (formData) => {
    
    let body={
      email:formData.email,
      password:formData.password,
      rememberMe:formData.rememberMe,
      captcha:formData.captcha
    }

    sendLogin(body).unwrap();    
  };



  if (me.me.id) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>      
      <form onSubmit={handleSubmit(formSubmitHandler)}>
      <div>
      <label htmlFor="email">Email</label>
        <input {...register("email")} name="email" id="email" placeholder="Email" />
        {errors.email ? (
            <span>{errors.email.message}</span>
          ) : (
            <></>
          )}        
      </div>
      <div>
      <label htmlFor="password">Password</label>
        <input {...register("password")} name="password" id="password" placeholder="Password" type={"password"}/>
        {errors.password ? (
            <span>{errors.password.message}</span>
          ) : (
            <></>
          )}          
      </div>
      <div>
      <label htmlFor="rememberMe">Remember me</label>
        <input {...register("rememberMe")} name="rememberMe" id="rememberMe"  type={"checkbox"}/>          
        
      </div>
      {data && (
        <div>
          <img src={data.url} />
          <input {...register("captcha")} name="captcha" id="captcha" placeholder="Symbols from image"/>
        {errors.captcha ? (
            <span>{errors.captcha.message}</span>
          ) : (
            <></>
          )}          
        </div>
      )}      
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   captchaUrl: state.auth.captchaUrl,
//   isAuth: state.auth.isAuth,
// });

// export default connect(mapStateToProps, { login })(Login);
export default Login