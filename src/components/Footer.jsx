import React from 'react';
import { AltIconWrap, AltLogin, AltLoginWrapper, Container } from '../styles/Footer.style'
import { AiOutlineGoogle } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { GrLinkedinOption, GrTwitter } from "react-icons/gr";

const Footer = () => {
  return <Container>
  <AltLoginWrapper>
 
  <AltIconWrap>
  <AltLogin>
    <AiOutlineGoogle /></AltLogin>
  <AltLogin>
    <RiFacebookFill /></AltLogin>
  <AltLogin>
    <GrLinkedinOption /></AltLogin>
    <AltLogin><GrTwitter />
  </AltLogin>
  </AltIconWrap>
</AltLoginWrapper>
example@gmail.com
<div>copyright @ 2022 Name all rights reserved</div>
</Container>
};

export default Footer;
