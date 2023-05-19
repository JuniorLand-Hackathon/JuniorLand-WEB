import { styled } from 'styled-components';

function SmallBox() {
    const puzzleImg = [
        {
            link: '',
            url: '/images/small/small1.png',
        },
        {
            link: '',
            url: '/images/small/small2.png',
        },
        {
            link: '',
            url: '/images/small/small3.png',
        },
    ];

    const styleImg = [
        {
            link: '',
            url: '/images/small/small4.png',
        },
        {
            link: '',
            url: '/images/small/small5.png',
        },
        {
            link: '',
            url: '/images/small/small6.png',
        },
        {
            link: '',
            url: '/images/small/small7.png',
        },
    ];

    const shootImg = [
        {
            link: '',
            url: '/images/small/small8.png',
        },
        {
            link: '',
            url: '/images/small/small9.png',
        },
        {
            link: '',
            url: '/images/small/small10.png',
        },
        {
            link: '',
            url: '/images/small/small11.png',
        },
        {
            link: '',
            url: '/images/small/small12.png',
        },
    ];

    const tycounImg = [
        {
            link: '',
            url: '/images/small/small19.png',
        },
        {
            link: '',
            url: '/images/small/small20.png',
        },
        {
            link: '',
            url: '/images/small/small21.png',
        },
        {
            link: '',
            url: '/images/small/small22.png',
        },
    ];

    const characterImg = [
        {
            link: '',
            url: '/images/small/small13.png',
        },
        {
            link: '',
            url: '/images/small/small14.png',
        },
        {
            link: '',
            url: '/images/small/small15.png',
        },
    ];

    const adventure = [
        {
            link: '',
            url: '/images/small/small16.png',
        },
        {
            link: '',
            url: '/images/small/small17.png',
        },
        {
            link: '',
            url: '/images/small/small18.png',
        },
    ];
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
    margin-top: 2rem;
    height: 19.4rem;
    overflow: hidden;
    border-bottom: 1px solid #cbcbcb;
`;

const StyledGameWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledTitle = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.7rem 0;
    font-size: 2rem;
    font-weight: bold;
`;

const StyledSubTitle = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0;
    color: #365576;
    font-weight: bold;
    border-left: 0.01rem solid #cbcbcb;
    border-right: 0.01rem solid #cbcbcb;
`;

const StyledItem = styled.div`
    position: relative;

    height: 40px;

    border-top: 1px solid #cbcbcb;
    border-left: 1px solid #d7d7d7;

    a {
        overflow: hidden;
        display: block;
        height: 43px;
    }

    img {
        overflow: hidden;
        vertical-align: top;
        border: none;
    }
`;

const StyledTitleWrapper = styled.div`
    border: 1px solid #cbcbcb;
    border-top: 2px solid #435066;
`;

const StyledNullItem = styled.div`
    border-bottom: 1px solid #cbcbcb;
    border-left: 1px solid #cbcbcb;
    background-color: #f3f3f3;
    min-height: 42px;
`;

const StyledNullSecondItem = styled.div`
    border-bottom: 1px solid #cbcbcb;
    border-left: 1px solid #cbcbcb;
    background-color: #f3f3f3;
    height: 100%;
`;
