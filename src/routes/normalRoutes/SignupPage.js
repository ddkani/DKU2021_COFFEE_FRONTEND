import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/Login.css";
import { REGISTER_REQUEST } from "../../redux/types";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const dispatch = useDispatch();
  const { reqResult, errorMsg } = useSelector((state) => state.auth);

  const [form, setValues] = useState({
    username: "",
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
    const { username, email, password } = form;
    const user = { username, email, password };
    dispatch({
      type: REGISTER_REQUEST,
      payload: user,
    });
  };

  return (
    <div id="page_wrap">
      <div className="wrapper">
        <div className="title">
          Signup Form
          <span className="subtitle">커피두잔 상품 가격 비교 플랫폼</span>
        </div>
        <form className="in_form" onSubmit={onSubmit}>
          <div className="field">
            <input
              type="text"
              className="nickname"
              onChange={onChange}
              name="username"
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
            이미 회원이신가요?{" "}
            <Link to="/login" className="check_link">
              로그인
            </Link>
          </div>
          <div id="error">{errorMsg}</div>
          <div id="result">
            {reqResult ? <p>회원가입이 성공했습니다!</p> : null}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
