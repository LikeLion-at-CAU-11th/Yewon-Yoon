import React from 'react';
import styled from 'styled-components';
const QuestionSection = ({question, getQuestions, myAnswer, selectAnswer}) => {
    const clickNext=()=>{
        const clickedAnswer = question.answerList.find((data)=>data.clicked);
        const answer = clickedAnswer ? clickedAnswer.aid : 0;
        myAnswer({
            id: question.id,
            answer: answer,
        })
        getQuestions(question.id + 1);
    };
    return (
        <>
        <QuizBox>
            <Title>{question.title}</Title>
        </QuizBox>
        <AnswerBox>
            {question.answerList.length > 0 &&
            question.answerList.map((answer,idx)=>(
                <Answer
                    key={idx}
                    onClick={()=>selectAnswer(answer.aid)}
                    clicked={answer.clicked}
                >{answer.content}
                </Answer>
            ))}
        </AnswerBox>
        <NextButton onClick={clickNext}>다음</NextButton>
            
        </>
    );
};

export default QuestionSection;
const NextButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 30px;
  font-size: 20px;
  background-color: #ffa43c;
  color: white;
  cursor: pointer;
  width: 15%;
  border-radius: 20px;
`;

const QuizBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 25px;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: #424242;
`;

const AnswerBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 15px;
`;

const Answer = styled.div`
  padding: 30px;
  border-radius: 20px;
  background-color: ${props => (props.clicked ? '#FFA43C' : 'beige')};
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;