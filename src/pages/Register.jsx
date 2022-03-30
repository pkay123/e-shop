import { LockOutlined, MailOutlined, Person } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../components/mobile";

const Container = styled.div`
  width: 100%;
  margin-bottom: 3rem;
`;

const RegisterContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  width: 100%;
`;

const Title = styled.h2`
  font-weight: 500;
  text-align: center;
  margin-top: 3rem;

  @media ${mobile.sm} {
    font-size: 1.3rem;
  }
`;

const FormsContainer = styled.div`
  margin-top: 3rem;
  background-color: #f1f1f1;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
  max-width: 100%;
  width: 30%;

  @media ${mobile.md} {
    width: 40%;
  }

  @media ${mobile.sm} {
    width: 80%;
  }
`;
const Forms = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .icon {
    border: 1px solid #222;
    font-size: 8rem;
    border-radius: 50%;
    color: #222;
  }
`;

const InputContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #222;

  .input-icon {
    color: #444;
  }
`;

const Input = styled.input`
  padding: 0.5rem 0.5rem;
  border: none;
  outline: none;
  background: #f1f1f1;
`;

const Text = styled.p`
  margin-top: 1rem;

  span {
    font-weight: 500;
    cursor: pointer;
  }
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.3rem 0.5rem;
  background-color: #222;
  color: #fff;
  border: 1px solid #444;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      font-weight: 500;
    }
  }
`;

function Register() {
  return (
    <Container>
      <RegisterContainer>
        <Title>Sign up</Title>
        <FormsContainer>
          <Forms>
            <Person className="icon" />

            <InputContainer>
              <Person className="input-icon" />
              <Input type="text" placeholder="Your Name" />
            </InputContainer>

            <InputContainer>
              <MailOutlined className="input-icon" />
              <Input type="email" placeholder="Email-Address" />
            </InputContainer>

            <InputContainer>
              <LockOutlined className="input-icon" />
              <Input type="password" placeholder="Password" />
            </InputContainer>

            <InputContainer>
              <LockOutlined className="input-icon" />
              <Input type="password" placeholder="Confirm Password" />
            </InputContainer>

            <Text>
              Already Have Account?{" "}
              <Link to="/login" className="link">
                <span>Login</span>
              </Link>
            </Text>

            <Button>REGISTER</Button>
          </Forms>
        </FormsContainer>
      </RegisterContainer>
    </Container>
  );
}

export default Register;
