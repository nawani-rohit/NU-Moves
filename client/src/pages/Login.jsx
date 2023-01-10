import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, reset } from "../redux/auth/authSlice";
import LottieDisplay from "../components/LottieDisplay/LottieDisplay";
import loginPerson from "../assets/lottie/loginPerson";
import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      navigate("/");
    }

    return () => dispatch(reset());
  }, [isError, isSuccess, errorMessage, successMessage, dispatch, navigate]);

  useEffect(() => {}, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    dispatch(login(data));
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
              <LottieDisplay lottieFile={loginPerson} />
            </div>
          </Col>
          <Col>
            <Form
              className="contactform"
              onSubmit={handleSubmit}
              style={{ margin: "auto" }}
            >
              <h1 className="text-center">LOGIN</h1>
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
              <Button
                style={{ background: "#333", width: "100%" }}
                type="submit"
              >
                Sign In
              </Button>
              <Link to="/find-account" style={{ color: "#333" }}>
                Forgot password?
              </Link>
              <br></br>
              New Customer? &nbsp;
              <Link to="/signup" style={{ color: "#333" }}>
                Register Here
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
