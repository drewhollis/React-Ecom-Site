import styled from "styled-components";
import React from "react";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 70px;
  background-color: #e63946;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  ${mobile({ height: "50px", width: "100vw", fontSize: "12px" })}
`;

function Announcement() {
  return <Container>Seasonal Macaroons Available Now!</Container>;
}

export default Announcement;
