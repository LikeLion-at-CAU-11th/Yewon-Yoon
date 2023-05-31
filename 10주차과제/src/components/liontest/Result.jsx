import React from 'react';
import styled from 'styled-components';
const Result = ({getResultData, resultData}) => {
    const ResultBtn=()=>{
        return <Button onClick={getResultData}>결과보기</Button>
    };
    return (
        <Dom>
            {resultData && Object.keys(resultData).length === 0?(
                <ContentBox>
                    <ResultBtn />
                </ContentBox>
            ):( 
                <>
                {resultData.result === 9?(
                    <>
                    <Score>
                        내 점수는 = {">"} {resultData.result} / 9
                    </Score>
                    <Title>🦁 모두 정답 🦁</Title>
                    </>
                ):(
                    <>
                    <Score>
                        내 점수는 ={">"} {resultData.result} / 9
                    </Score>
                    <Title>틀린 문제</Title>
                    {resultData.incorrect.length > 0 &&
                        resultData.incorrect.map((data, idx)=>(
                            <A key={idx}>
                                <Question>{data.title}</Question>
                            <Answer>정답은? {data.answer}입니다~</Answer>
                            </A>
                        ))}
                    </>
                )}
                </>
            )}
            
        </Dom>
    );
};

export default Result;
const Dom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 25px;
  align-items: center;
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: 500;
`;
const Score = styled.div`
  font-size: 30px;
  font-weight: 500;
`;

const A = styled.div`
  width: 100%;
`;
const Question = styled.div`
  font-size: 15px;
  font-weight: 800;
`;
const Answer = styled.div`
  font-size: 15px;
`;

const ContentBox = styled.div`
  width: 100%;
  font-size: 26px;
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