import { styled } from 'styled-components';

function Footer() {
    return (
        <StyledWrapper>
            <span>쥬니어랜드@GDSC-Hackathon2023</span>
        </StyledWrapper>
    );
}

export default Footer;

const StyledWrapper = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6.5rem;
    bottom: 0px;

    span {
        font-weight: bolder;
        font-size: 0.9rem;
    }
`;
