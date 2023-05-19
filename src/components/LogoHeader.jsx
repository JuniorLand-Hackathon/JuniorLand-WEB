import logo from '../image/logo.png';
import styled from 'styled-components';

export default function LogoHeader() {
    return (
        <Header>
            <img src={logo} alt="juniorland logo" />
            <Titles>
                <h2>내 아이를 위한 선물 주니어랜드</h2>
                <h3>기본 정보 입력하기</h3>
            </Titles>
        </Header>
    );
}

const Header = styled.header`
    margin: 20px;
    display: flex;
    gap: 25px;
    h2 {
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 40px;
    }
    height: 105px;
`;

const Titles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
`;
