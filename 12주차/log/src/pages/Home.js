import React, { useState } from 'react'
import { Title, Wrapper, Form, Input, Inputs } from '../components/Common';
import { styled } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../apis/login';
import { useForm } from '../hooks/useForm';

const Home = () => {
    const [id, changeId] = useForm();
    const [pw, changePW] = useForm();
    const router  = useNavigate();
    const onClick=async()=>{
        const result = await login(id, pw);
        const {accessToken, refreshToken} = result;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        router('/mypage');
    };
  return (
    <Wrapper>
        <Title>로그인하기</Title>
        <Form>
            <Inputs>
                <Input placeholder='아이디' type = "text" value={id} onChange={changeId}></Input>
                <Input placeholder='비밀번호' type='password' value={pw} onChange={changePW}></Input>
            </Inputs>
            <Button onClick={onClick}>Login</Button>
        </Form>
        <CustomLink to="/signup">회원가입하기</CustomLink>
    </Wrapper>
  )
}

export default Home;
const Button = styled.div`
  background-color: black;
  color: white;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
const CustomLink = styled(Link)`
  margin-top: 20px;
  color: black;
  &:visited {
    color: black;
  }
`;