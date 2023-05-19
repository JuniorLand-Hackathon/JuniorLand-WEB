import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import { mapResolver } from '../../util/utils';

function SmallBox() {
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

    const puzzleImg = [
        {
            url: '/images/small/small1.png',
        },
        {
            url: '/images/small/small2.png',
        },
        {
            url: '/images/small/small3.png',
        },
    ].map((item) => mapResolver(item, giftsSize, educationsSize));

    const styleImg = [
        {
            url: '/images/small/small4.png',
        },
        {
            url: '/images/small/small5.png',
        },
        {
            url: '/images/small/small6.png',
        },
        {
            url: '/images/small/small7.png',
        },
    ].map((item) => mapResolver(item, giftsSize, educationsSize));

    const shootImg = [
        {
            url: '/images/small/small8.png',
        },
        {
            url: '/images/small/small9.png',
        },
        {
            url: '/images/small/small10.png',
        },
        {
            url: '/images/small/small11.png',
        },
        {
            url: '/images/small/small12.png',
        },
    ].map((item) => mapResolver(item, giftsSize, educationsSize));

    const tycounImg = [
        {
            url: '/images/small/small19.png',
        },
        {
            url: '/images/small/small20.png',
        },
        {
            url: '/images/small/small21.png',
        },
        {
            url: '/images/small/small22.png',
        },
    ].map((item) => mapResolver(item, giftsSize, educationsSize));

    const characterImg = [
        {
            url: '/images/small/small13.png',
        },
        {
            url: '/images/small/small14.png',
        },
        {
            url: '/images/small/small15.png',
        },
    ].map((item) => mapResolver(item, giftsSize, educationsSize));

    const adventure = [
        {
            url: '/images/small/small16.png',
        },
        {
            url: '/images/small/small17.png',
        },
        {
            url: '/images/small/small18.png',
        },
    ].map((item) => mapResolver(item, giftsSize, educationsSize));

    return (
        <StyledWrapper>
            <StyledTitleWrapper>
                <StyledTitle>장르별 대표게임</StyledTitle>
            </StyledTitleWrapper>

            <StyledGameWrapper>
                <div>
                    <StyledSubTitle>퍼즐/보드</StyledSubTitle>
                    {puzzleImg.map((item, index) => (
                        <StyledItem key={index}>
                            <a href={item.link}>
                                <img src={item.url} alt={index} />
                            </a>
                        </StyledItem>
                    ))}
                    <StyledNullItem></StyledNullItem>
                    <StyledNullSecondItem></StyledNullSecondItem>
                </div>
                <div>
                    <StyledSubTitle>패션/스타일</StyledSubTitle>
                    {styleImg.map((item, index) => (
                        <StyledItem key={index}>
                            <a href={item.link}>
                                <img src={item.url} alt={index} />
                            </a>
                        </StyledItem>
                    ))}
                    <StyledNullItem></StyledNullItem>
                </div>
                <div>
                    <StyledSubTitle>슈팅/아케이드</StyledSubTitle>
                    {shootImg.map((item, index) => (
                        <StyledItem key={index}>
                            <a href={item.link}>
                                <img src={item.url} alt={index} />
                            </a>
                        </StyledItem>
                    ))}
                </div>
                <div>
                    <StyledSubTitle>타이쿤/키우기</StyledSubTitle>
                    {tycounImg.map((item, index) => (
                        <StyledItem key={index}>
                            <a href={item.link}>
                                <img src={item.url} alt={index} />
                            </a>
                        </StyledItem>
                    ))}

                    <StyledNullItem></StyledNullItem>
                </div>

                <div>
                    <StyledSubTitle>캐릭터 게임</StyledSubTitle>
                    {characterImg.map((item, index) => (
                        <StyledItem key={index}>
                            <a href={item.link}>
                                <img src={item.url} alt={index} />
                            </a>
                        </StyledItem>
                    ))}
                    <StyledNullItem></StyledNullItem>
                    <StyledNullSecondItem></StyledNullSecondItem>
                </div>
                <div>
                    <StyledSubTitle>어드벤처</StyledSubTitle>
                    {adventure.map((item, index) => (
                        <StyledItem key={index}>
                            <a href={item.link}>
                                <img src={item.url} alt={index} />
                            </a>
                        </StyledItem>
                    ))}
                    <StyledNullItem></StyledNullItem>{' '}
                    <StyledNullSecondItem></StyledNullSecondItem>
                </div>
            </StyledGameWrapper>
        </StyledWrapper>
    );
}

export default SmallBox;

const StyledWrapper = styled.div`
    position: relative;
    margin-top: 32px;
    height: 295px;
    overflow: hidden;
    border-bottom: 0.0625rem solid #cbcbcb;
`;

const StyledGameWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledTitle = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 11.2px 0;
    font-size: 32px;
    font-weight: bold;
`;

const StyledSubTitle = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 0;
    color: #365576;
    font-weight: bold;
    border-left: 0.16px solid #cbcbcb;
    border-right: 0.16px solid #cbcbcb;
`;

const StyledItem = styled.div`
    position: relative;

    height: 2.5rem;

    border-top: 0.0625rem solid #cbcbcb;
    border-left: 0.0625rem solid #d7d7d7;

    a {
        overflow: hidden;
        display: block;
        height: 2.6875rem;
    }

    img {
        overflow: hidden;
        vertical-align: top;
        border: none;
    }
`;

const StyledTitleWrapper = styled.div`
    border: 0.0625rem solid #cbcbcb;
    border-top: 0.125rem solid #435066;
`;

const StyledNullItem = styled.div`
    border-bottom: 0.0625rem solid #cbcbcb;
    border-left: 0.0625rem solid #cbcbcb;
    background-color: #f3f3f3;
    min-height: 2.625rem;
`;

const StyledNullSecondItem = styled.div`
    border-bottom: 0.0625rem solid #cbcbcb;
    border-left: 0.0625rem solid #cbcbcb;
    background-color: #f3f3f3;
    height: 100%;
`;
