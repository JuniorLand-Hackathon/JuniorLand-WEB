import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import YouTube from 'react-youtube';

const VideoPlayer = ({ id }) => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        // 비디오 데이터를 서버에서 가져오는 함수
        const fetchVideo = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_SERVER_ADDR}/children/${params.get(
                        'id',
                    )}${[params.get('phone').slice(-4)]}`,
                );
                console.log(response.data.educations[id - 1].videoId);
                setVideoUrl(response.data.educations[id - 1].videoId);
            } catch (error) {
                console.error(
                    '비디오 데이터를 가져오는 중에 에러가 발생했습니다:',
                    error,
                );
            }
        };

        fetchVideo();
    });

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
    return <VideoPlayer id={id} />;
}

export default Video;
