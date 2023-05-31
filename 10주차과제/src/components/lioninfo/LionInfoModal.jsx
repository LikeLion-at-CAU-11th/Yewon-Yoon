import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FilterButton from "./FilterButton";
import UserDataSection from "./UserDataSection";
import { getUserPerPage, getAllUser, getUserPerGender, getUserPerStack } from "../../apis/lioninfo";
import {useSearchParams, useLocation} from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
const LionInfoModal = () => {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages= 7;
  const [activeButton, setActiveButton] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsPage = searchParams.get("page");

 
  //"All" 버튼을 눌렀을 때 모든 유저 데이터를 가져오도록 합니다.
  const handleAllUsers=async()=>{
    const response = await getAllUser();
    setUserData(response.data.data);
    setActiveButton("All");
    searchParams.delete('page');
    setSearchParams(searchParams);
  };
  const handlePageChange = async (page) => {
    const response = await getUserPerPage(page);
    setUserData(response.data.data);
    setCurrentPage(page);
    setActiveButton(null);
    setSearchParams({page});
  };
  const handleFilterButtonClick = async (type, title) => {
    setActiveButton(title);
    if (type === "page") {
      const response = await getUserPerPage(1);
      setUserData(response.data.data);
      setCurrentPage(1);
      searchParams.set('page',1);
      setSearchParams(searchParams);

    } else if (type === "stack") {
      const response = await getUserPerStack(title);
      setUserData(response.data.data);
      setSearchParams({title});
    } else if (type === "gender") {
      const response = await getUserPerGender(title);
      setUserData(response.data.data);
      setSearchParams({title});
    }
  };
  
  const category = [
    {
      type: "page",
      title: "All",
      onClick: handleAllUsers,
    },
    {
      type: "gender",
      title: "male",
    },
    {
      type: "gender",
      title: "female",
    },
    {
      type: "stack",
      title: "frontend",
    },
    {
      type: "stack",
      title: "backend",
    },
    {
      type: "stack",
      title: "design",
    },
    {
      type: "stack",
      title: "pm",
    },
  ];
  useEffect(() => {
    if (paramsPage) handlePageChange(parseInt(paramsPage));
  }, [paramsPage]);

  return (
    <Dom>
      <Title>🦁 LikeLion 11th 🦁</Title>
      <ButtonDom>
        
        {category.map((c,i) => (
          <FilterButton
            key={i}
            title={c.title}
            type={c.type}
            setUserData={setUserData}
            activeButton={activeButton}
            onClick={handleFilterButtonClick}
          />
        ))}
      </ButtonDom>
      <UserDataSection userData={userData} />
        <Pagination>
          {Array.from({length: totalPages},(_, i) => (
            <PaginationButton
              key={i}
              onClick={() => handlePageChange(i + 1)}
              active={currentPage === i + 1}
            >
              {i + 1}
            </PaginationButton>
          ))}
        </Pagination>        
    </Dom>
  );
};

export default LionInfoModal;

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const ButtonDom = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Dom = styled.div`
  gap: 30px;
  background-color: #ffd9b6;
  width: 90vw;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  border-radius: 20px;
  box-shadow: 5px 5px 5px lightgray;
`;


const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "orange" : "gray")};
  color: white;
  font-weight: 700;
  cursor: pointer;
`;