import React, { Fragment } from "react";

import LoginComponet from "../components/UI-componets/LoginComponet";
import LoginButton from "../components/UI/Button";
import InputText from "../components/UI/InputText";
import { useFormik } from "formik";

const initialValue = {
  email: '',
  password: ''
}

function LogIn() {

    const formik = useFormik({
      initialValues: initialValue,
      onSubmit: (value) => {
        console.log(value);
      }
    })
    console.log(formik);
    return(
      <form>
      <LoginComponet>
        <InputText type="email" label="E-mail" value={formik.values.email}/>
        <br />
        <br />
        <InputText type="password" label="Password" value={formik.values.password}/>
        <br />
        <br />
        <LoginButton>Login</LoginButton>
      </LoginComponet>
    </form>
      )
}

export default LogIn;
