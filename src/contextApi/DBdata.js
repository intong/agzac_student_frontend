import React, { createContext, useState } from "react";

const DBdataContext = createContext({
  dataState: {
    missionOneData: [],
    missionTwoData: [],
    missionThreeData: {},
    missionFourData: {
      keyword: "", // 사회문제 분석 선택한 사회문제 키워드
      timeOnPage: [], // 미션4 각 탭 체류 시간 (배열길이 : 4)
      futureJob: [], // 미래인재역할 탭에서 선택한 미래인재 (비열길이 : 3)
      price: 0, // 상품가격
    },
  },
  dataActions: {
    setMissionOneData: () => {},
    setMissionTwoData: () => {},
    setMissionThreeData: () => {},
    setMissionFourData: () => {},
  },
});

const DBdataProvider = ({ children }) => {
  const [missionOneData, setMissionOneData] = useState([]);
  const [missionTwoData, setMissionTwoData] = useState([]);
  const [missionThreeData, setMissionThreeData] = useState({});
  const [missionFourData, setMissionFourData] = useState({
    keyword: "", // 사회문제 분석 선택한 사회문제 키워드
    timeOnPage: [], // 미션4 각 탭 체류 시간 (배열길이 : 4)
    futureJob: [], // 미래인재역할 탭에서 선택한 미래인재 (비열길이 : 3)
    price: 0, // 상품가격
  });
  const value = {
    dataState: {
      missionOneData,
      missionTwoData,
      missionThreeData,
      missionFourData,
    },
    dataActions: {
      setMissionOneData,
      setMissionTwoData,
      setMissionThreeData,
      setMissionFourData,
    },
  };
  return (
    <DBdataContext.Provider value={value}>{children}</DBdataContext.Provider>
  );
};

const { Consumer: DBdataConsumer } = DBdataContext;

export { DBdataProvider, DBdataConsumer };

export default DBdataContext;
