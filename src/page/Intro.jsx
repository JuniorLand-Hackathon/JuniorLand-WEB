import styled from 'styled-components';
import LogoHeader from '../components/LogoHeader';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Intro = () => {
    const [childName, setChildName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();
    return (
        <>
            <LogoHeader />
            <Form
                onSubmit={() => {
                    navigate('/form?id=' + childName + '&phone=' + phoneNumber);
                }}
            >
                <input
                    type="text"
                    placeholder="아이 이름"
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                ></input>
                <input
                    type="text"
                    placeholder="내 전화번호"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                ></input>
                <SubmitButton type="submit">제출하기</SubmitButton>
            </Form>
        </>
    );
};

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32px 24px 40px;
    gap: 16px;
    margin: 100px auto;

    width: 448px;
    height: 274px;
    left: 640px;
    top: 560px;

    background: #ffffff;
    border: 12px solid #ff6641;
    box-shadow: 16px 16px 0px #236df6;

    input {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 12px;
        gap: 10px;

        height: 41px;

        border: 1px solid #ababab;
        border-radius: 4px;

        /* Inside auto layout */

        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;

        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;

        &::placeholder {
            color: #2c2c2c;
            opacity: 0.4;
        }
    }
`;

const SubmitButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    gap: 8px;

    height: 40px;

    /* Light mode/Primary600 */

    background: #4945ff;
    border-radius: 4px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;

    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    /* identical to box height, or 114% */

    display: flex;
    align-items: flex-end;

    /* Light mode/Neutral0 */

    color: #ffffff;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`;

export default Intro;
