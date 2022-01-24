import React from "react";
import "../styles/Country.style";
import { Container, Image, Info, ImageContainer} from "../styles/Country.style";


const Country = ({flag, name, region}) => {
  return (
    <Container>
        <ImageContainer>
      <Image src={flag}></Image></ImageContainer>
      <Info>
        <h3>{name}</h3>
        <h5>{region}</h5>
      </Info>
    </Container>
  );
};

export default Country;
