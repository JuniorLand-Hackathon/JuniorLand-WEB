import { styled } from 'styled-components';

function Lank() {
    const lankImg = [
        {
            link: '/',
            url: '/images/lank/lank1.png',
            title: '레트로 타임 귀한 타임리스',
            subTitle: '패션/스타일',
        },
        {
            link: '/',
            url: '/images/lank/lank2.png',
            title: '패션 쥬디: 웨딩 스타일',
            subTitle: '패션/스타일',
        },
        {
            link: '/',
            url: '/images/lank/lank3.png',
            title: '카타폰',
            subTitle: '슈팅/아케이트',
        },
        {
            link: '/',
            url: '/images/lank/lank4.png',
            title: '인형뽑기',
            subTitle: '자작게임',
        },
    ];
    return (
        <>
            {lankImg.map((item, index) => (
                <StyledCardWrapper>
                    <img src={item.url} alt="lank_img" />

                    <StyledContentWrapper>
                        <StyledNumLank>{index + 1}. </StyledNumLank>
                        <div>
                            <span>{item.title}</span>
                            <p>{item.subTitle}</p>
                        </div>
                    </StyledContentWrapper>
                </StyledCardWrapper>
            ))}
            <div></div>
        </>
    );
}

export default Lank;

const StyledCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 10rem;
    height: auto;
    margin: 0 0.1rem;

    border-radius: 8px;
    overflow: hidden;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    a {
        all: unset;
        overflow: hidden;
        display: block;
    }
    img {
        width: 100%;
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
