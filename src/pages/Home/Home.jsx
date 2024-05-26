import React from 'react';
import LayOut from '../../Components/LayOuts/LayOut';
import Section from './Section';
import "../../styles/homestyles.css";
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';

function Home() {
  return (
    <>
      <LayOut>
        <Section/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section5/>
        <Section6/>
        <Section7/>
      </LayOut>
    </>
  )
}

export default Home
