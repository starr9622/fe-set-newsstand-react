import React from 'react';
import styled from "styled-components";

const UL = styled.ul`
    position : absolute;
    left : 0.3rem;
`;

const LI = styled.li`
    cursor: pointer;
    &:hover {
        opacity: 0.3;
    }
`;
function Title(){
    return (
        <UL>
            <li>뉴스스탠드</li>
            <li class='rap'><i class="glyphicon glyphicon-menu-right"></i></li>
            <LI>전체언론사</LI>
            <li class='rap'>|</li>
            <LI>MY뉴스</LI>
        </UL>
      );
}

export default Title;