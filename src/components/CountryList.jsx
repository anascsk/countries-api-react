import React from 'react';
import Country from './Country';
import { Container } from "../styles/CountryList.style"

const CountryList = ({countries}) => {
  return <Container>
      
      {countries.map((country) => (
          
            <Country flag={country.flag} name={country.name} region={country.region} key={country.name}/>
          ))}
          
        
          
  </Container>;
};

export default CountryList;
