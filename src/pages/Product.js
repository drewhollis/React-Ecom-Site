import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Flavors from "../components/Flavors";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.h3`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FlavorFilter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-style: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option``;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  border: 1px solid #1d3557;
  padding: 10px;
  background-color: #f1faee;
  border-radius: 5px;
  color: #1d3557;
  cursor: pointer;
  transition: all 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;

  :hover {
    background-color: #a8dadc;
    transform: scale(1.2);
  }
`;

function Product() {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="/images/VerticalBox.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Mix and Match Dozen</Title>
          <Desc>Pick any combination from Jess's available flavors!</Desc>
          <Price>$30</Price>
          <FilterContainer>
            <FlavorFilter>
              <FilterText>Filter Flavors:</FilterText>
              <Select>
                <Option disable selected>
                  Flavor
                </Option>
                <Option>Flavor 1</Option>
                <Option>Flavor 2</Option>
                <Option>Flavor 3</Option>
                <Option>Flavor 4</Option>
              </Select>
            </FlavorFilter>
            <FlavorFilter>
              <FilterText>Sort Flavors:</FilterText>
              <Select>
                <Option disable selected></Option>
                <Option>Seasonal</Option>
                <Option>New</Option>
                <Option>Most Popular</Option>
              </Select>
            </FlavorFilter>
          </FilterContainer>
          <ButtonContainer>
            <Button>
              <ShoppingCartOutlined /> Go To Cart
            </Button>
          </ButtonContainer>
          <Flavors />
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Product;
