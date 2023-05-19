import { styled } from 'styled-components';
import CategoryNav from './components/Nav/CategoryNav';
import LogoNav from './components/Nav/LogoNav';

function NotFound() {
    const img = [
        { url: '/images/404/404img2.gif' },
        { url: '/images/404/404img3.gif' },
        { url: '/images/404/404img4.gif' },
        { url: '/images/404/404img5.gif' },
        { url: '/images/404/404img6.gif' },
        { url: '/images/404/404img7.gif' },
        { url: '/images/404/404img8.gif' },
        { url: '/images/404/404img9.gif' },
        { url: '/images/404/404img10.gif' },
        { url: '/images/404/404bottom.gif' },
    ];
    return (
        <div>
            <LogoNav />
            <CategoryNav />
            <StyledWrapper>
                <StyledLeftWrapper>
                    <div>
                        <img src="/images/404/404img.gif" alt="404_img" />
                    </div>
                    <div>
                        {img.map((item) => (
                            <img src={item.url} alt="404_img" />
                        ))}
                    </div>
                </StyledLeftWrapper>
                <StyledRightWrapper>
                    <StyledTitleWrapper>
                        <img src="/images/404/404title.gif" alt="404_img" />
                        <img src="/images/404/404list.gif" alt="404_img" />
                    </StyledTitleWrapper>
                    <StyedRightContentWrapper>
                        <StyledArrowWrapper>
                            <img
                                src="/images/404/404arrow2.gif"
                                alt="404_img"
                            />
                            <img src="/images/404/404arrow.gif" alt="404_img" />
                        </StyledArrowWrapper>
                        <StyledContent>
                            <span>꽝!</span>
                            <p>부모님 말씀 잘 들어라 ~</p>
                            <StyledBorderImg>
                                <img
                                    src="/images/404/404marong.jpeg"
                                    alt="404_img"
                                />
                            </StyledBorderImg>
                        </StyledContent>
                    </StyedRightContentWrapper>
                </StyledRightWrapper>
            </StyledWrapper>
        </div>
    );
}

export default NotFound;

const StyledWrapper = styled.div`
    padding: 2rem 3rem;
    display: flex;
    flex-direction: row;
`;

const StyledLeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: auto;
`;

const StyledRightWrapper = styled.div`
    width: 60rem;
    margin: 0 4rem;
    padding: 0 3rem;
`;

const StyledTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    width: 100%;
`;

const StyedRightContentWrapper = styled.div`
    width: 100%;
    height: 500px;

    border-radius: 30px;
    overflow: hidden;
    margin-top: 1rem;
    border: 4px solid #ffea9c;
    border-top: 2rem solid #ffea9c;

    span {
        font-size: 7rem;
        color: rgb(166, 0, 0);
        font-weight: bolder;
    }
    p {
        font-size: 3rem;
        margin-top: 1rem;
        font-size: 1.6rem;
    }
`;

const StyledArrowWrapper = styled.div`
    position: absolute;
    z-index: 33;
    display: flex;
    flex-direction: row;
    width: 60rem;
    justify-content: space-between;
    margin-top: 3rem;
`;

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    img {
        width: 100%;
    }
`;

const StyledBorderImg = styled.div`
    border-radius: 5rem;
    overflow: hidden;
    width: 30rem;
    margin-top: 3rem;
`;
