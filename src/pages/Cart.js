import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  justify-content: center;
  align-items: center;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const Title = styled.h1`
  font-weight: 3;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  border: 1px solid #1d3557;
  padding: 10px;
  background-color: #f1faee;
  border-radius: 5px;
  color: #1d3557;
  cursor: pointer;
  transition: all 0.5s ease;

  :hover {
    background-color: #a8dadc;
    transform: scale(1.2);
  }
`;

const TopTexts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ padding: "20px" })}
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #a8dadc;
  border: none;
  height: 3px;
  opacity: 0.3;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid #a8dadc;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const BottomButton = styled.button`
  padding: 10px;
  width: 80%;
  background-color: #1d3557;
  border-radius: 5px;
  color: #f1faee;
  cursor: pointer;
  transition: all 0.5s ease;

  :hover {
    transform: scale(1.2);
  }
`;

function Cart() {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Your Cart (2)</TopText>
            <TopText>Your Favorites (0)</TopText>
          </TopTexts>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="/images/VerticalStack.jpg" />
                <Details>
                  <ProductName>
                    <b>Flavor:</b> Pumpkin Pie Half Dozen
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 12345
                  </ProductId>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove />
                  <ProductAmount>1</ProductAmount>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice>$ 15</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="/images/VerticalCloseUpBox.jpg" />
                <Details>
                  <ProductName>
                    <b>Flavor:</b> Fall Seasonal Dozen
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 67890
                  </ProductId>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove />
                  <ProductAmount>1</ProductAmount>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice> $ 45</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Delivery Fee</SummaryItemText>
              <SummaryItemPrice> $ 5.99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Discounts</SummaryItemText>
              <SummaryItemPrice> $ -__</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice> $ 50.99</SummaryItemPrice>
            </SummaryItem>
            <BottomButton>Checkout Now</BottomButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart;
