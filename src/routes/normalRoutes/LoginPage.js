import React, { useState } from "react";
import "../../assets/Login.css";
import { LOGIN_REQUEST } from "../../redux/types";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { reqResult, errorMsg } = useSelector((state) => state.auth);

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

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;
    const user = { email, password };
    console.log(user);
    dispatch({
      type: LOGIN_REQUEST,
      payload: user,
    });
  };

  return (
    <div id="page_wrap">
      <div className="wrapper">
        <div className="title">
          Login Form
          <span className="subtitle">커피두잔 상품 가격 비교 플랫폼</span>
        </div>
        <form className="in_form" onSubmit={onSubmit}>
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
            회원이 아니신가요?{" "}
            <Link to="/signup" className="check_link">
              회원가입
            </Link>
          </div>
          <div id="error">{errorMsg}</div>
          <div id="result">
            {reqResult ? <p>로그인이 성공했습니다!</p> : null}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
