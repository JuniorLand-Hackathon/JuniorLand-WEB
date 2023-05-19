import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const PresentLayoutBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 24px 40px;
    gap: 16px;

    position: absolute;
    width: 448px;
    height: 327px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    background: #ffffff;
    border: 12px solid #ff6641;
    box-shadow: 16px 16px 0px #236df6;
`;

const Image = styled.div`
    width: 303px;
    height: 165px;
    background: #dcdce4;
`;

const Button = styled.div`
    /* button */
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 12px 16px;
    width: 60px;
    height: 16px;
    background: #4945ff;
    border-radius: 4px;

    /* text */
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    color: #ffffff;

    &:hover {
        background: #63e6be;
        cursor: pointer;
    }
`;

function Present() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    // 아이 이름(query params), 이미지 불러오기
    const [childName, setchildName] = useState('');
    const [image, setImage] = useState('');

    const { id } = useParams();
    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await axios.get(
                    `${
                        process.env.REACT_APP_SERVER_ADDR
                    }/childrens/${params.get('id')}${[
                        params.get('phone').slice(-4),
                    ]}`,
                );
            } catch (error) {
                console.error(
                    '이미지 데이터를 가져오는 중에 에러가 발생했습니다:',
                    error,
                );
            }
        };
    });

    return (
        <PresentLayoutBlock>
            <p>{params.get('id')}을/를 위한 선물이 도착했습니다.</p>
            <Image id={id} />
            <Button>선물 받기</Button>
        </PresentLayoutBlock>
    );
}

export default Present;