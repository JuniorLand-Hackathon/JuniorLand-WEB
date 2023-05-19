import React from 'react';
import { styled } from 'styled-components';

function CategoryNav() {
    const menu = [
        { name: '퍼즐/보드' },
        { name: '패션/스타일' },
        { name: '슈팅/아케이드' },
        { name: '타이쿤/키우기' },
        { name: '자작게임' },
        { name: '스포츠/레이싱' },
        { name: '어드벤처' },
    ];
    return (
        <StyledWrapper>
            <StyledInWrapper>
                {menu.map((item) => (
                    <StyledMenu>{item.name}</StyledMenu>
                ))}
            </StyledInWrapper>
        </StyledWrapper>
    );
}

export default CategoryNav;

const StyledWrapper = styled.div`
    position: relative;
    width: 100%;
    background-color: #0c7dd1;
`;

const StyledInWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const StyledMenu = styled.li`
    position: relative;
    display: flex;

    float: left;
    width: 10rem;
    height: 56px;
    float: left;
    height: 4rem;
    background-color: #0c7dd1;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: white;
    font-weight: bold;

    border-left: 0.05rem solid #264a65;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    cursor: pointer;
`;
