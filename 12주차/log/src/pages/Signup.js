import React from 'react';
import { Title, Wrapper, Form, Input, Inputs } from '../components/Common';
import { useForm } from '../hooks/useForm';
import { styled } from 'styled-components';
import { signUp } from '../apis/signUp';
import {useNavigate} from 'react-router-dom';

const Signup = () => {
  const [id, changeId] = useForm();
  const [pw, changePW] = useForm();
  const [name, changeName] = useForm();
  const [age, changeAge] = useForm();
  const router= useNavigate();
  const onClick=async()=>{
    await signUp(id, pw, name, age);
    router('/');
  };
  return (
    <Wrapper>
      <Title>회원가입</Title>
      <Inputs>
      <Input placeholder='아이디' value={id} onChange={changeId}></Input>
      <Input placeholder='비밀번호' type="password" value={pw} onChange={changePW}></Input>
      <Input placeholder='이름' value={name} onChange={changeName}></Input>
      <Input placeholder='나이' value={age} onChange={changeAge}></Input>
      </Inputs>
      <Button onClick={onClick}>Sign Up</Button>
    </Wrapper>
  )
}

export default Signup;
const Button=styled.button`
  background-color: black;
  color:white;
  padding-left:20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  margin-top:10px;
`