import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  max-width: 1200px;
  margin:  auto;
  display: grid;
  grid-gap: 2vw;
  grid-template-columns: repeat(2, 1fr);
  @media only screen and (max-device-width: 600px) {
    grid-template-columns: repeat(1, 2fr);
  }
`;