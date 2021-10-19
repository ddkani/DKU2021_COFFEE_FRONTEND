import React, { useState } from "react";
import "../../assets/Login.css";

const LoginPage = () => {
  const [form, setValues] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //   const onSubmit = (e) => {
  //     const { email, password } = form;
  //     const user = { email, password };
  //     console.log(user);
  //     dispatch({
  //       type: LOGIN_REQUEST,
  //       payload: user,
  //     });
  //   };

  return (
    <div className="in_page">
      <br />
      <br />
      <br />
      <div className="wrapper">
        <div className="title">
          Login Form
          <span className="subtitle">커피두잔 상품 가격 비교 플랫폼</span>
        </div>
        <form className="in_form">
          <div className="field">
            <input
              type="text"
              className="id"
              onChange={onChange}
              name="email"
              required
            />
            <label>Email Address</label>
          </div>
          <div className="field">
            <input
              type="password"
              className="pw"
              onChange={onChange}
              name="password"
              required
            />
            <label>Password</label>
          </div>
          <div className="field">
            <input type="submit" value="Login" />
          </div>
          <div className="signup_link">
            Not a member?{" "}
            <a className="check_link" href="/signup">
              Signup now
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
