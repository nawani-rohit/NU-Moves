import React, { useEffect } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import "../styles/login.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset } from "../redux/auth/authSlice";
import toast from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";
import LottieDisplay from "../components/LottieDisplay/LottieDisplay";
import registerperson from "../assets/lottie/registerPerson";

const Login = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errorMessage, successMessage, isError, isSuccess, isLoading } =
    useSelector((selector) => selector.auth);

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
    }

    if (isSuccess) {
      toast.success(successMessage);
      navigate("/signin");
    }

    return () => dispatch(reset());
  }, [isError, isSuccess, errorMessage, successMessage, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      fullname: name,
      phoneno: phone,
      email,
      password,
      password2,
    };
    console.log(data);
    dispatch(register(data));
    setName("");
    setEmail("");
    setPassword("");
    setPassword2("");
    setPhone("");
  };

  if (isLoading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ThreeDots color="#3a77ff" height={100} width={100} />
      </div>
    );
  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="lottieConatiner">
              <LottieDisplay lottieFile={registerperson} />
            </div>
          </Col>
          <Col>
            <Form
              className="contactform"
              onSubmit={handleSubmit}
              style={{ margin: "auto" }}
            >
              <h1 className="text-center">SIGN UP</h1>

              <Form.Group className="my-4" controlId="formBasicName">
                <Form.Label className="input_label">Full Name</Form.Label>
                <Form.Control
                  className="input_container"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="my-4" controlId="formBasicEmail">
                <Form.Label className="input_label">Email address</Form.Label>
                <Form.Control
                  className="input_container"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="my-4" controlId="formBasicPhoneNo">
                <Form.Label className="input_label">Phone Number</Form.Label>
                <Form.Control
                  className="input_container"
                  type="text"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="my-4" controlId="formBasicPassword">
                <Form.Label className="input_label">Password</Form.Label>
                <Form.Control
                  className="input_container"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="my-4" controlId="formBasicPassword">
                <Form.Label className="input_label">
                  Confirm Password
                </Form.Label>
                <Form.Control
                  className="input_container"
                  type="password"
                  placeholder="Confirm your password"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                />
              </Form.Group>

              <Button
                style={{ background: "#333", width: "100%" }}
                type="submit"
              >
                Sign Up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
