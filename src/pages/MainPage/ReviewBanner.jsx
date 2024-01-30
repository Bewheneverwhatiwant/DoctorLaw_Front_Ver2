import styled from 'styled-components';
import ContainerRow from '../../Components/Container/ContainerRow';
import ContainerColumn from '../../Components/Container/ContainerColumn';
import StyledImg from '../../Components/Container/CustomImg';
import React, { useState, useEffect } from 'react';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
`;

const Title = styled.h1`
color: white;
font-size: 48px;
font-weight: bold;
`;

const AllReview = styled.div`
width: 1000px;
display: flex;
flex-direction: row;
`;

const Review = styled.div`
width: 500px;
border: none;
border-radius: 15px;
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
background-color: #18181C;
margin: 10px;
`;

const ReviewText = styled.a`
color: white;
font-size: 18px;
line-height: 20px;
text-align: left;
`;

const ReviewTextContainer = styled.div`
padding-top: 20px;
width: 450px;
height: 200px;
`;

const Line = styled.div`
width: 450px;
height: 1px;
background-color: #404047;
`;

const CustomRow = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
align-items: center;
`;

const CustomRow2 = styled.div`
width: 450px;
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const CustomColumn = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
align-items: flex-start;
`;

const Sizedbox = styled.div`
width: 30px;
height: 30px;
`;

const Name = styled.h1`
color: white;
font-size: 20px;
font-weight: bold;
`;

const SubName = styled.a`
color: white;
font-size: 14px;
font-weight: #9E9E9E;
`

const ProfileImg = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
`;

const Star = styled.div`
  display: inline-block;
  width: 20px; /* 별의 너비 */
  height: 20px; /* 별의 높이 */
  background-color: gold; /* 별의 색상 */
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
`;

const ReviewContainer = styled.div`
  display: flex;
  overflow: hidden;
`;

const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Indicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.active
        ? 'linear-gradient(45deg, #FF9898, #8054FF)'
        : 'grey'};
  background-image: ${props => props.active
        ? 'linear-gradient(45deg, #FF9898, #8054FF)'
        : 'none'};
`;

export default function Component() {

    const reviews = [
        {
            text: "이거 덕분에 전세사기 안 당했어요 ㅠㅠ 감사합니다!<br />이 서비스 만든 분들 대박나세요 ~~~",
            name: "지존재웅",
            subName: "타고난 코딩 천재",
            profileImg: "img/people_1.png"
        },
        {
            text: "개쩔어요 앞으로 이것만 써야 할 것 같아요<br />1000000 포인트를 바로 구매했어요!",
            name: "s수혁마법사s",
            subName: "해탈한 인간",
            profileImg: "img/people_2.png"
        },
        {
            text: "사장이 주휴수당은 원래 안주는 거라고 해서 이상했는데<br />닥터로우가 계약서 분석해준 덕분에 안 떼먹힐 수 있게 되었어요<br />감사합니다",
            name: "기니피그",
            subName: "동물",
            profileImg: "img/people_3.png"
        },
        {
            text: "근로계약서 맨 마지막에 사장님이 몰래 숨겨놓은 독소조항을<br />닥터로우가 찾아줘서 노예신세를 면할 수 있었어요 감사합니다 ㅜㅜ",
            name: "브라질리언 왁서",
            subName: "변태",
            profileImg: "img/people_4.png"
        },
        {
            text: "닥터로우 뭐임? 이거면 독소조항 다 찾아낸다고 해서<br />믿고 계약했는데 3년째 월급을 못 받고 일하고 있다 ㅅㅂ",
            name: "스위스소년",
            subName: "권고사직",
            profileImg: "img/people_5.png"
        }
    ];

    const [currentReview, setCurrentReview] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReview((currentReview) => (currentReview + 2) % reviews.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <MainContainer>
            <Title>고객 평가</Title>
            <Sizedbox />

            <AllReview>
                {reviews.slice(currentReview, currentReview + 2).map((review, index) => (
                    <Review key={index}>
                        <ReviewTextContainer>
                            <ReviewText dangerouslySetInnerHTML={{ __html: review.text }} />
                        </ReviewTextContainer>
                        <Line />
                        <Sizedbox />
                        <CustomRow2>
                            <CustomRow>
                                <ProfileImg src={review.profileImg} />
                                <CustomColumn>
                                    <Name>{review.name}</Name>
                                    <SubName>{review.subName}</SubName>
                                </CustomColumn>
                            </CustomRow>

                            <CustomRow>
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} />
                                ))}
                            </CustomRow>
                        </CustomRow2>
                    </Review>
                ))}
            </AllReview>

            <IndicatorContainer>
                {Array.from({ length: Math.ceil(reviews.length / 2) }, (_, i) => (
                    <Indicator key={i} active={i === Math.floor(currentReview / 2)} />
                ))}
            </IndicatorContainer>
        </MainContainer>
    );
};
