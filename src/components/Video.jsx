import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import YouTube from 'react-youtube';

const VideoTemplate = styled.div`
    width: 1200px;
    height: 800px;

    position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
    background: gray;
    border-radius: 10px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

    margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

    margin-top: 96px;
    margin-bottom: 32px;
`;

const VideoPlayer = ({ id }) => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        // 비디오 데이터를 서버에서 가져오는 함수

        const fetchVideo = async () => {
            try {
                const response = await axios.get(
                    `${
                        process.env.REACT_APP_SERVER_ADDR
                    }/childrens/${params.get('id')}${[
                        params.get('phone').slice(-4),
                    ]}`,
                );
                setVideoUrl(response.educations[id].videoId);
            } catch (error) {
                console.error(
                    '비디오 데이터를 가져오는 중에 에러가 발생했습니다:',
                    error,
                );
            }
        };

        fetchVideo();
    }, []);

    return (
        <div>
            {videoUrl ? (
                <YouTube
                    videoId={videoUrl}
                    // opts={opts}
                    // onReady={this._onReady}
                />
            ) : (
                <p>비디오를 로딩 중입니다...</p>
            )}
        </div>
    );
};

function Video({ id }) {
    <VideoTemplate>
        <VideoPlayer id={id} />
    </VideoTemplate>;
}

export default Video;
