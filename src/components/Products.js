import React from "react";
import styled from "styled-components";
import Product from "./Product";
import { packages } from "../SlideData";
import { mobile } from "../responsive";

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

function Products() {
  return (
    <Container>
      {packages.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
}

export default Products;
