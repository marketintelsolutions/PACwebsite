import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiSolidLockAlt } from "react-icons/bi";

const Login = () => {
  return (
    <div className="admin-login">
      <div className="left">
        <div className="center">
          <h1>PAC Holdings</h1>
          <p>Admin Login</p>
        </div>
      </div>
      <div className="right">
        <form>
          <div className="form-center">
            <h1>Hello Again!</h1>
            <p>Welcome back</p>

            <div className="input-item">
              <label htmlFor="email">
                <AiOutlineMail />
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
              />
            </div>
            <div className="input-item">
              <label htmlFor="password">
                <BiSolidLockAlt />
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>

            <button type="button">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
