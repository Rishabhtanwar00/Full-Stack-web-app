import React, { useState } from "react";

import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

import styled from "styled-components";

import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  height: 50px;
  width: 50px;
  background-color: #ececec;
  border-radius: 50%;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  z-index: 2;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  display: flex;
  transition: 1.5s all ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 60px;
`;
const Desc = styled.p`
  font-size: 20px;
  letter-spacing: 3px;
  font-weight: 500;
  margin: 20px 0;
`;
const Btn = styled.button`
  font-size: 20px;
  cursor: pointer;
  background-color: transparent;
  padding: 10px;
`;

const Slider = () => {
  const [slideIndex, setSlideindex] = useState(0);
  const handleClick = (direction) => {
    if (direction == "left") {
      setSlideindex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideindex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Btn>Shop Now</Btn>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
