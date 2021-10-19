import React, { useState } from "react";
import "../../assets/Login.css";

const SignupPage = () => {
  const [form, setValues] = useState({
    nickname: "",
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
          Signup Form
          <span className="subtitle">커피두잔 상품 가격 비교 플랫폼</span>
        </div>
        <form className="in_form">
          <div className="field">
            <input
              type="text"
              className="nickname"
              onChange={onChange}
              name="nickname"
              required
            />
            <label>Nickname</label>
          </div>
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
            <input type="submit" value="SignUp" />
          </div>
          <div className="login_link">
            Already a member?{" "}
            <a className="check_link" href="/login">
              Login now
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
