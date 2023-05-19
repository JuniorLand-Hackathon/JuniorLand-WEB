import axios from 'axios';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import Footer from '../components/Footer';
import Box from '../components/Game/Box';
import SmallBox from '../components/Game/SmallBox';
import Top from '../components/Game/Top';
import CategoryNav from '../components/Nav/CategoryNav';
import LogoNav from '../components/Nav/LogoNav';

function Main() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    useEffect(() => {
        const api = async () => {
            const response = await axios.get(
                `${process.env.REACT_APP_SERVER_ADDR}/children/${params.get(
                    'id',
                )}${params.get('phone').slice(-4)}`,
            );
            return response.data;
        };

        api();
    }, []);

    return (
        <StyledWrapper>
            <LogoNav />
            {/* <StyledHeader>
                <StyledTitleWrapper>
                    <StyledTitle>게임랜드</StyledTitle>
                </StyledTitleWrapper>
            </StyledHeader> */}
            <StyledGameWrapper>
                <CategoryNav />
                <Top />

                <StyledBoxWrapper>
                    <Box />
                </StyledBoxWrapper>
                <StyledBanner src="/images/banner.jpeg" alt="banner_img" />

                <SmallBox />
            </StyledGameWrapper>
            <Footer />
        </StyledWrapper>
    );
}

export default Main;

const StyledWrapper = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const StyledTitleWrapper = styled.div`
    width: 100%;
    padding: 1rem 3rem;
`;

const StyledTitle = styled.h1`
    float: left;
    width: 199px;
    height: 75px;
    font-family: 'Apple SD Gothic Neo';
`;

const StyledGameWrapper = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledBoxWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`;

const StyledBanner = styled.img`
    width: 77%;
`;
