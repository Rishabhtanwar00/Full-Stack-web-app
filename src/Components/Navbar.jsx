import { Badge } from "@material-ui/core";
import { LocalFlorist, Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  /* background-color: grey; */
`;

const Wrapper = styled.div`
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
`;

const Logo = styled.span`
  font-weight: bold;
  font-size: 25px;
  margin-left: 100px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputContainer = styled.input`
  border: 1px solid black;
  border-radius: 10px;
  margin-right: 5px;
`;

const Right = styled.div`
  flex: 1.5;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const MenuItem = styled.span`
  cursor: pointer;
  font-size: 18px;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            RCLOTH
            <LocalFlorist style={{ fontSize: 25 }} />
          </Logo>
        </Left>
        <Right>
          <SearchContainer>
            <InputContainer />
            <Search />
          </SearchContainer>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>Register</MenuItem>
          <MenuItem>
            <Badge color="secondary" badgeContent={99}>
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
