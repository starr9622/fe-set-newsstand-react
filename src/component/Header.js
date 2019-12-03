import React from 'react';
import Title from './Title.js';
import Nav from './Nav.js';
import styled from "styled-components";

const HeaderWrap = styled.div`
    position: relative;
    padding: 0.3rem;
    height: 30px;
`;
function App() {
  return (
    <HeaderWrap>
      <Title/>
      <Nav/>
    </HeaderWrap>
  );
}

export default App;
