import styled from 'styled-components';
import LogoHeader from '../components/LogoHeader';
import { useState, useEffect } from 'react';
import { extractVideoIDFromURL } from '../util/utils';
import { useLocation, useNavigate } from 'react-router-dom';

const FormPage = () => {
    const [presentURLs, setPresentURLs] = useState(['']);
    const [videoURLs, setVideoURLs] = useState(['']);
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${
                        process.env.REACT_APP_SERVER_ADDR
                    }/childrens/${params.get('id')}${params
                        .get('phone')
                        .slice(-4)}`,
                );
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                const clientSidePresentURLs = jsonData.gifts.map(
                    (gift) => gift.url,
                );
                clientSidePresentURLs.length &&
                    setPresentURLs(clientSidePresentURLs);
                const clientSideVideoURLs = jsonData.educations.map(
                    (education) =>
                        `https://www.youtube.com/watch?v=${education.videoId}`,
                );
                clientSideVideoURLs.length && setVideoURLs(clientSideVideoURLs);
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <LogoHeader />
            <Main>
                <TitleArea>
                    <Title>선물 리스트</Title>
                    <Button
                        onClick={() => {
                            if (
                                presentURLs.length < 6 &&
                                presentURLs.reduce((prev, cur) => {
                                    return prev && !!cur;
                                }, true)
                            ) {
                                setPresentURLs([...presentURLs, '']);
                            } else {
                                if (presentURLs.length < 6)
                                    alert(
                                        '모든 칸을 채운 후 추가를 눌러주세요!',
                                    );
                                else {
                                    alert(
                                        '최대 가능한 선물 등록 개수는 6개입니다!',
                                    );
                                }
                            }
                        }}
                    >
                        선물 추가하기
                    </Button>
                </TitleArea>
                <Grid>
                    {presentURLs.map((url, idx) => (
                        <Input
                            placeholder="선물 이미지 URL"
                            value={url}
                            key={idx}
                            onChange={(e) => {
                                setPresentURLs((prevURLs) => {
                                    const updatedURLs = [...prevURLs];
                                    updatedURLs[idx] = e.target.value;
                                    return updatedURLs;
                                });
                            }}
                        ></Input>
                    ))}
                </Grid>
                <TitleArea>
                    <Title>비디오 리스트</Title>
                    <Button
                        onClick={() => {
                            if (
                                videoURLs.length < 6 &&
                                videoURLs.reduce((prev, cur) => {
                                    return prev && !!extractVideoIDFromURL(cur);
                                }, true)
                            ) {
                                setVideoURLs([...videoURLs, '']);
                            } else {
                                if (videoURLs.length < 6) {
                                    alert(
                                        '비디오 중에 유효하지 않은 값이 있습니다.',
                                    );
                                } else {
                                    alert(
                                        '가능한 비디오 리스트 최대 개수는 6개입니다!',
                                    );
                                }
                            }
                        }}
                    >
                        교육 비디오 추가하기
                    </Button>
                </TitleArea>
                <Grid>
                    {videoURLs.map((url, idx) => (
                        <Input
                            placeholder="비디오 URL"
                            value={url}
                            key={idx}
                            onChange={(e) => {
                                setVideoURLs((prevURLs) => {
                                    const updatedURLs = [...prevURLs];
                                    updatedURLs[idx] = e.target.value;
                                    return updatedURLs;
                                });
                            }}
                        ></Input>
                    ))}
                </Grid>
                <SubmitButton
                    type="button"
                    onClick={async () => {
                        try {
                            await fetch(
                                `${
                                    process.env.REACT_APP_SERVER_ADDR
                                }/childrens/${params.get('id')}${params
                                    .get('phone')
                                    .slice(-4)}`,
                                {
                                    method: 'PUT',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({
                                        gifts: presentURLs.map((url) => {
                                            return {
                                                url,
                                                tagId: Math.floor(
                                                    Math.random() * 48,
                                                ),
                                            };
                                        }),
                                        videoIds: videoURLs.map((url) => {
                                            return extractVideoIDFromURL(url);
                                        }),
                                    }),
                                },
                            );
                            alert('등록이 완료되었습니다!');
                            console.log(123);
                            navigate('/main?' + params.toString());
                        } catch (e) {
                            console.error(e);
                        }
                    }}
                >
                    제출하기
                </SubmitButton>
            </Main>
        </>
    );
};

const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 8px;
    gap: 10px;
    cursor: pointer;

    height: 24px;

    /* teal/500 */

    background: #319795;
    border-radius: 6px;
    border: #319795;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height, or 133% */

    /* white */

    color: #ffffff;
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TitleArea = styled.div`
    display: flex;
    width: 1222px;
    gap: 34px;
    margin-bottom: 30px;
    align-items: center;
`;

const Title = styled.h2`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 120%;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 45px;
    column-gap: 20px;
    margin-bottom: 20px;
`;

const Input = styled.input`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 12px;
    gap: 10px;

    width: 368px;
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
`;

const SubmitButton = styled.button`
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;

    /* Light mode/Neutral0 */

    background: #ffffff;
    /* Neutral200 */

    border: 1px solid #dcdce4;
    border-radius: 4px;
`;
export default FormPage;
