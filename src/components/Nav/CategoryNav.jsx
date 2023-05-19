import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import { mapResolver } from '../../util/utils';

function CategoryNav() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const [giftsSize, setgiftsSize] = useState();
    const [educationsSize, seteducationsSize] = useState();
    const currentPage = window.location.href;

    useEffect(() => {
        if (currentPage.endsWith('/404')) {
            return;
        }
        const api = async () => {
            const response = await axios.get(
                `${process.env.REACT_APP_SERVER_ADDR}/children/${params.get(
                    'id',
                )}${params.get('phone').slice(-4)}`,
            );
            setgiftsSize(response.data.giftsSize);
            seteducationsSize(response.data.educationsSize);
        };
        api();

        return;
    }, []);

    const menu = [
        { name: '퍼즐/보드' },
        { name: '패션/스타일' },
        { name: '슈팅/아케이드' },
        { name: '타이쿤/키우기' },
        { name: '자작게임' },
        { name: '스포츠/레이싱' },
        { name: '어드벤처' },
    ].map((item) => mapResolver(item, giftsSize, educationsSize));

    return (
        <StyledWrapper>
            <StyledInWrapper>
                {menu.map((item) => (
                    <a href={item.link}>
                        <StyledMenu>{item.name}</StyledMenu>
                    </a>
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
    a {
        overflow: hidden;
        display: block;
    }
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
