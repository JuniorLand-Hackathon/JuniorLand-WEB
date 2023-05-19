import { styled } from 'styled-components';
import Lank from './Card/Lank';

function Top() {
    return (
        <StyledWrapper>
            <StyledImgWrapper>
                <StyledImg src="/images/bg.png" alt="bg_img" />
            </StyledImgWrapper>

            <StyledItemWrapper>
                <StyledTopWrapper>
                    <StyledTitleWrapper>
                        <h3>테마별 게임 TOP4</h3>
                    </StyledTitleWrapper>
                    <StyledTab>
                        <StyledTabLink>NEW</StyledTabLink>
                        <StyledTabLink>순발력</StyledTabLink>
                        <StyledTabLink>상상력</StyledTabLink>
                    </StyledTab>
                </StyledTopWrapper>
                <StyledCardWrapper>
                    <Lank />
                    <StyledPoster>
                        <img src="/images/poster.jpeg" alt="poster_img" />
                    </StyledPoster>
                </StyledCardWrapper>
            </StyledItemWrapper>
        </StyledWrapper>
    );
}

export default Top;

const StyledWrapper = styled.div`
    overflow: hidden;
    position: relative;
    height: 28rem;
    width: 100%;
`;

const StyledImgWrapper = styled.div`
    position: absolute;
    width: 100%;
`;

const StyledImg = styled.img`
    all: unset;
    overflow: hidden;
    width: 100%;
`;

const StyledItemWrapper = styled.div`
    position: relative;
    z-index: 33;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 3rem;
`;

const StyledTitleWrapper = styled.div`
    left: 0px;
    h3 {
        font-size: 2.2rem;
    }
`;

const StyledCardWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledPoster = styled.div`
    margin-left: 2.5rem;
`;

const StyledTab = styled.div`
    right: 4px;
    width: 222px;
    height: auto;
    background-color: #3d4552;
    border-radius: 30px;

    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
`;

const StyledTabLink = styled.li`
    right: 4px;
    list-style: none;

    color: #879199;
    padding: 0.4rem 1rem;
    border-right: 1px solid #879199;
    height: 100%;
    padding-right: 1rem;
    font-size: 1.1rem;
`;

const StyledTopWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;
