import React from 'react';
import './App.css';
import Header from './component/Header.js';
import styled from "styled-components";

const Img = styled.img`
  padding: 1rem;
  border: 1px solid #dfdfdf;
  width: 8rem;
  height: 4rem;
  object-fit: scale-down;
  margin: 0 0.5rem 0.5rem 0;
`;

function App() {
  var datas = require('./news-data.json');
  const listItems = datas.map((data) =>
    <Img src={data.logoImgUrl} alt={data.company} />
  );
  return (
    <div>
      <Header/>
      {listItems}
    </div>
  );
}

export default App;
