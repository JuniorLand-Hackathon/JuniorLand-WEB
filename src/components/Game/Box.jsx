import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import { mapResolver } from '../../util/utils';

function Box() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const [giftsSize, setgiftsSize] = useState();
    const [educationsSize, seteducationsSize] = useState();

    useEffect(() => {
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

    const img = [
        {
            url: '/images/game/game1.png',
        },
        {
            url: '/images/game/game2.png',
        },
        {
            url: '/images/game/game5.png',
        },
        {
            url: '/images/game/game3.png',
        },
        {
            url: '/images/game/game6.png',
        },
        {
            url: '/images/game/game7.png',
        },
        {
            url: '/images/game/game8.png',
        },
        {
            url: '/images/game/game10.png',
        },
        {
            url: '/images/game/game11.png',
        },
        {
            url: '/images/game/game12.png',
        },
        {
            url: '/images/game/game14.png',
        },
        {
            url: '/images/game/game15.png',
        },
    ].map((item) => mapResolver(item, giftsSize, educationsSize));

    return (
        <StyledWrapper>
            {img.map((data, index) => (
                <StyledLi key={index}>
                    <a href={data.link}>
                        <img src={data.url} alt={index} />
                    </a>
                </StyledLi>
            ))}
        </StyledWrapper>
    );
}

export default Box;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 62rem;
    flex-wrap: wrap;
    margin-bottom: 16px;
`;

const StyledLi = styled.div`
    position: relative;

    width: 179px;
    height: 83px;
    border: 1px solid #d9d9d9;

    a {
        overflow: hidden;
        display: block;
        height: 83px;
    }

    img {
        vertical-align: top;
        border: none;
    }
`;
