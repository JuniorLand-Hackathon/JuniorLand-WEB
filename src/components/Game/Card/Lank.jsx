import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import { mapResolver } from '../../../util/utils';

function Lank() {
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
    });

    const lankImg = [
        {
            url: '/images/lank/lank1.png',
            title: '레트로 타임 귀한 타임리스',
            subTitle: '패션/스타일',
        },
        {
            url: '/images/lank/lank2.png',
            title: '패션 쥬디: 웨딩 스타일',
            subTitle: '패션/스타일',
        },
        {
            url: '/images/lank/lank3.png',
            title: '카타폰',
            subTitle: '슈팅/아케이트',
        },
        {
            url: '/images/lank/lank4.png',
            title: '인형뽑기',
            subTitle: '자작게임',
        },
    ].map((item) => mapResolver(item, giftsSize, educationsSize));

    return (
        <>
            {lankImg.map((item, index) => (
                <StyledCardWrapper>
                    <a href={item.link}>
                        <img src={item.url} alt="lank_img" />
                    </a>
                    <StyledContentWrapper>
                        <StyledNumLank>{index + 1}. </StyledNumLank>
                        <div>
                            <span>{item.title}</span>
                            <p>{item.subTitle}</p>
                        </div>
                    </StyledContentWrapper>
                </StyledCardWrapper>
            ))}
        </>
    );
}

export default Lank;

const StyledCardWrapper = styled.a`
    all: unset;
    display: flex;
    flex-direction: column;
    width: 10rem;
    height: auto;
    margin: 0 0.3rem;

    border-radius: 8px;
    overflow: hidden;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    a {
        all: unset;
        width: 100%;
    }

    img {
        width: 100%;
        height: 100%;
    }
`;

const StyledContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #33363b;
    height: 100%;
    color: white;
    padding: 0.8rem;

    span {
        font-size: 18px;
        font-weight: bold;
        letter-spacing: 0.4px;
    }

    p {
        font-size: 12px;
        font-weight: light;
    }

    div {
        margin-left: 0.5rem;
    }
`;

const StyledNumLank = styled.span`
    font-size: 2rem;
`;
