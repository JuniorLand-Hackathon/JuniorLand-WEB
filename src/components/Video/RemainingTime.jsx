import { CiTimer } from 'react-icons/ci';

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';

const RemainingTime = ({ id }) => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const [remainingTime, setRemainingTime] = useState('');

    useEffect(() => {
        // 남은 시간을 서버에서 가져오는 함수
        const fetchRemainingTime = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_SERVER_ADDR}/children/${params.get(
                        'id',
                    )}${[params.get('phone').slice(-4)]}`,
                );
                console.log(id);
                console.log(response.data.educations);
                setRemainingTime(response.data.educations[id - 1].duration);
            } catch (error) {
                console.error(
                    '남은 시간을 가져오는 중에 에러가 발생했습니다:',
                    error,
                );
            }
        };

        fetchRemainingTime();
    }, []);

    return (
        <div>
            <CiTimer />
            <p>남은 시간</p>
            {remainingTime ? (
                <p>
                    {remainingTime.hours}:{remainingTime.minutes}:
                    {remainingTime.seconds}
                </p>
            ) : (
                <p>로딩 중입니다...</p>
            )}
        </div>
    );
};

export default RemainingTime;
