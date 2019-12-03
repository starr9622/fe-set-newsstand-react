import React from 'react';
import styled from "styled-components";

const UL = styled.ul`
    position : absolute;
    right : 0.3rem;
`;

const Button = styled.button`
  color: lightgray;
  font-size: 14px;
  cursor: pointer;
  border: 1px solid #dfdfdf;
  &:hover {
    opacity: 0.3;
  }
`;
const ListButton = styled.button`
  color: lightgray;
  font-size: 14px;
  cursor: pointer;
  border: none;
  &:hover {
    opacity: 0.3;
  }
`;
function Nav(){
    return (
        <UL>
            <li><ListButton><i class="glyphicon glyphicon-th-large"></i></ListButton></li>
            <li><ListButton><i class="glyphicon glyphicon-th-list"></i></ListButton></li>
            <li><Button><i class="glyphicon glyphicon-menu-left"></i></Button></li>
            <li><Button><i class="glyphicon glyphicon-menu-right"></i></Button></li>
        </UL>
      );
}

export default Nav;