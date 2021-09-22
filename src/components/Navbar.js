import React from "react";
import styled from "styled-components";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  color: white;
  ${mobile({ height: "50px", width: "100vw" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex; /*aligns divs horizontally*/
  justify-content: space-between; /*creates even space between divs*/
  align-items: center;
  background-color: #1d3557;
  ${mobile({ padding: "10px 0px" })}
`;

const NavbarLeft = styled.div`
  flex: 1; /*defines horizontal size of div. makes all 3 even.*/
  display: flex;
  justify-content: flex-start;
`;

const NavbarCenter = styled.div`
  flex: 1; /*defines horizontal size of div. makes all 3 even.*/
  text-align: center;
  justify-content: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "20px", justifyContent: "center" })}
`;

const NavbarRight = styled.div`
  flex: 1; /*defines horizontal size of div. makes all 3 even.*/
  display: flex;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "8px", marginLeft: "5px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <NavbarLeft>
          <MenuItem>Products</MenuItem>
          <MenuItem>Flavors</MenuItem>
          <MenuItem>Seasonal Specials</MenuItem>
        </NavbarLeft>
        <NavbarCenter>
          <Logo>BakedByJess</Logo>
        </NavbarCenter>
        <NavbarRight>
          <MenuItem>Sign Up</MenuItem>
          <MenuItem>Sign </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </NavbarRight>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
