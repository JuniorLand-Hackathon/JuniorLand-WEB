import React from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

function LogoNav() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    return (
        <StyledNav>
            <a href={'/main?' + params.toString()}>
                <StyledImg src="/images/logo.gif" alt="logo_img" />
            </a>
            <StyledBtn>링크 복사하기</StyledBtn>
        </StyledNav>
    );
}

export default LogoNav;

const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;

    height: 2.25rem;
    line-height: 1rem;

    padding: 2rem 3rem;
`;

const StyledImg = styled.img`
    width: 10rem;
`;

const StyledBtn = styled.button`
    all: unset;
    position: absolute;
    right: 0px;
    margin-right: 5rem;
    background-color: lightgray;
    border-radius: 20px;
    font-size: 14px;
    padding: 0.5rem 1rem;
`;
