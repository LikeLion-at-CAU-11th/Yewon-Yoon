import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import QuizSection from "./QuestionSection";
import Result from "./Result";
import { getResult, getTest } from "../../apis/liontest";

const LionTestModal = () => {
  const [question, setQuestion] = useState({});
  const [firstPage, setFirstPage] = useState(false);
  const [answer, setAnswer] = useState([]);
  const [resultData, setResultData] = useState({});


  const getQuestions = async (id) => {
    try {
      const response = await getTest();
      const res = response.data.data;
      const data=res[id]
      if(data){
        setQuestion(data);
        setFirstPage(true);
      } else {
        setFirstPage(false);
      }   
    } catch (error) {
      console.log(error);
    }
  };
  const getResultData = async () => {
    const response = await getResult(answer);
    const res = response.data.data;
    console.log(res);
    setResultData(res);    
  };
  const selectAnswer = (id)=>{
    setQuestion((answer)=>({
      ...answer,
      answerList: answer.answerList.map((data)=>({
        ...data,
        clicked: data.aid === id,
      })),
    }));
  }
  const myAnswer = (answer)=>{
    setAnswer((prevAnswers)=>[...prevAnswers, answer]);
  }

  return (
    <Dom>
      <Title>🦁 멋사인 테스트 🦁</Title>
      { firstPage ? (
        <QuizSection
          question={question}
          getQuestions={getQuestions}
          myAnswer={myAnswer}
          selectAnswer={selectAnswer}
        />
      ): answer.length > 0 ? (
        <Result getResultData={getResultData} resultData={resultData}/>
      ):(
      <ContentBox>
          <Button onClick={() => getQuestions(0)}>시작하기</Button>
      </ContentBox>
      )}
    </Dom>
  );
};

export default LionTestModal;
const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80%;
`;
const Button = styled.div`
  &:hover {
    background-color: orange;
    color: white;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  font-size: 25px;
  color: grey;
  background-color: white;
  border-radius: 20px;
  border: 2px solid white;
  cursor: pointer;
  font-weight: 500;
`;
const Dom = styled.div`
  gap: 30px;
  background-color: #ffd9b6;
  width: 90vw;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  min-height: 600px;
  border-radius: 20px;
  box-shadow: 5px 5px 5px lightgray;
`;