import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { featuredflavors } from "../SlideData";
import CategoryItem from "./FeaturedFlavorItem";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${mobile({ flexDirection: "column" })}
`;

function FeaturedFlavors() {
  return (
    <Container>
      {featuredflavors.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
}

export default FeaturedFlavors;
