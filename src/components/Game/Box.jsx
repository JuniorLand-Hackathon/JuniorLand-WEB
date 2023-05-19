import { styled } from 'styled-components';

function Box() {
    const img = [
        {
            link: '',
            url: '/images/game/game1.png',
        },
        {
            link: '',
            url: '/images/game/game2.png',
        },
        {
            link: '',
            url: '/images/game/game5.png',
        },
        {
            link: '',
            url: '/images/game/game3.png',
        },
        {
            link: '',
            url: '/images/game/game6.png',
        },
        {
            link: '',
            url: '/images/game/game7.png',
        },
        {
            link: '',
            url: '/images/game/game8.png',
        },
        {
            link: '',
            url: '/images/game/game10.png',
        },
        {
            link: '',
            url: '/images/game/game11.png',
        },
        {
            link: '',
            url: '/images/game/game12.png',
        },
        {
            link: '',
            url: '/images/game/game14.png',
        },
        {
            link: '',
            url: '/images/game/game15.png',
        },
    ];
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
