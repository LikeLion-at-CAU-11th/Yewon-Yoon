import React from "react";
import styled from "styled-components";

const UserCard = ({ user }) => {
  return (
    <Card>
      <Row>
        <div>이름</div>
        <div>{user.name}</div>
      </Row>
      <Row>
        <div>전공</div>
        <div>{user.major}</div>
      </Row>
      <Row>
        <div>파트</div>
        <div>{user.stack}</div>
      </Row>
    </Card>
  );
};

export default UserCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffd9d9;
  width: 200px;
  height: 130px;
  justify-content: center;
  padding: 0 30px;
  border-radius: 20px;
  gap: 10px;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
`;
