import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Flavors from "../components/Flavors";
import EmailList from "../components/EmailList";
import Footer from "../components/Footer";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
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

function ProductList() {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Search Flavors</Title>
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
      <Flavors />
      <EmailList />
      <Footer />
    </Container>
  );
}

export default ProductList;
