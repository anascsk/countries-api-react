import React from "react";
import {
  AltLogin,
  AltLoginWrapper,
  Button,
  Container,
  ImageWrap,
  LoginWrap,
  Row,
  AltIconWrap
} from "../styles/Login.style";
import loginPic from "../images/login-pic.png";
import { AiOutlineGoogle } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { GrLinkedinOption, GrTwitter } from "react-icons/gr";
import {useHistory} from 'react-router-dom'

const Login = () => {
    const history= useHistory()
    const onLogin= () => {
        history.push('/home')
    }
  return (
    <Container>
      <LoginWrap>
        <h1>Sign In</h1>
        <h5>
          New User? <span>Create An Account</span>
        </h5>
        <form>
          <input type="email" placeholder="Username or Email" />
          <input type="password" placeholder="Password" />
          <Row>
            <input type="checkbox" /> Keep me Signed In
          </Row>
          <Button onClick={onLogin}>Sign In</Button>
        </form>
        <AltLoginWrapper>
          <h6>Or Sign In With</h6>
          <AltIconWrap>
          <AltLogin>
            <AiOutlineGoogle /></AltLogin>
          <AltLogin>
            <RiFacebookFill /></AltLogin>
          <AltLogin>
            <GrLinkedinOption /></AltLogin>
            <AltLogin><GrTwitter />
          </AltLogin>
          </AltIconWrap>
        </AltLoginWrapper>
      </LoginWrap>
      <ImageWrap>
        <img src={loginPic} alt=""/>
      </ImageWrap>
    </Container>
  );
};

export default Login;
