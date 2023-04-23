import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import login from "../Images/login.png";
import "../index.css";

const Register = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // form submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      await axios.post("/users/register", values);
      message.success("Registration Successfull");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      // message.error("Invalid username or password");
      message.error("Something went wrong");
    }
  };

  // prevent for login user

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <div className="row g-0">
        <div className="col-lg-6">
          <div className="register-page">
            {loading && <Spinner />}
            <Form
              layout="vertical"
              onFinish={submitHandler}
              style={{ background: "#ececec", padding: "50px" }}
            >
              {" "}
              <div className="log_in">
                <img src={login} alt="" />
              </div>
              {/*
            <h1>Register Form</h1>
          */}
              <h6 className="mb-2" style={{ color: "gray" }}>
                Make your app management easy and fun!
              </h6>
              <Form.Item label="Name" name="name">
                <Input type="text" placeholder="Enter Name" />
              </Form.Item>
              <Form.Item label="Email" name="email">
                <Input type="email" placeholder="Enter Email" />
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input type="password" placeholder="Enter Passwords" />
              </Form.Item>
              <div className="d-flex justify-content-between">
                <Link
                  to="/login"
                  style={{ textDecoration: "none" }}
                  className="m-2"
                >
                  Already Register ? Click Here to Login
                </Link>
                <button className="btn btn-primary" submit>
                  Register
                </button>
              </div>
            </Form>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="right_img">
            <img
              src="https://demos.themeselection.com/materio-mui-react-nextjs-admin-template/demo-1/images/pages/auth-v2-register-illustration-light.png"
              alt=""
              width={750}
              height={550}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
