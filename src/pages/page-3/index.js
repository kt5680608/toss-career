import React, { useState, useEffect } from "react";

import {
  MainContainer,
  MainContentContainer,
  TitleContainer,
  PageTitle,
  PageTitleDetail,
  InterviewVideoContainer,
  Video,
  CoreDetailButton,
} from "./style";

import { useInView } from "react-intersection-observer";

import { BlankBox } from "../style";

import {
  INTERVIEW_VIDEOS,
  ANIMATION_PARENT,
  ANIMATION_ITEM,
} from "../../assets";

function Page3() {
  const [videoArray, setVideoArray] = useState(INTERVIEW_VIDEOS);
  const [ref, inView] = useInView();
  const [inViewControl, setInViewControl] = useState(false);
  const [inViewVideoControl, setInViewVideoControl] = useState(false);
  let currentPlay = document.getElementById("current-play");

  const changeArrayIndex = async () => {
    let currentPlay = document.getElementById("current-play");
    if (currentPlay !== null) {
      currentPlay.pause();
      currentPlay.currentTime = 0;
    }

    const tmpVideo = videoArray[0];
    await setVideoArray([
      ...videoArray.filter((_, index) => index !== 0),
      tmpVideo,
    ]);
  };
  useEffect(() => {
    let currentPlay = document.getElementById("current-play");
    if (currentPlay !== null && inViewVideoControl) {
      currentPlay.play();
    } else {
      currentPlay.pause();
    }
  }, [currentPlay, inViewVideoControl]);

  useEffect(() => {
    if (inView) {
      setInViewControl(true);
    }
    setInViewVideoControl(inView);
  }, [inView]);

  return (
    <MainContainer ref={ref}>
      {inViewControl && (
        <>
          <MainContentContainer
            variants={ANIMATION_PARENT}
            initial="hidden"
            animate="show"
          >
            <TitleContainer>
              <PageTitle variants={ANIMATION_ITEM}>
                최고의 몰입과 성장을 경험할 수 있도록 토스의 일하는 문화는 계속
                진화합니다
              </PageTitle>
              <PageTitleDetail variants={ANIMATION_ITEM}>
                세상에 없던 제품과 서비스를 선보이려면, 새로운 문화가 바탕이
                되어야 한다고 믿습니다.
                <br /> 토스 문화의 근간이 되는 코어 밸류(value), 그 세번째
                버전을 소개합니다.
              </PageTitleDetail>
            </TitleContainer>
            <InterviewVideoContainer variants={ANIMATION_ITEM}>
              {videoArray?.map((video, index) => {
                return (
                  <Video
                    id={index === 1 ? "current-play" : undefined}
                    key={video.key}
                    onEnded={changeArrayIndex}
                    whileHover={{
                      boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`,
                    }}
                    initial={{
                      x: (index - 1) * 240,
                      width: index === 1 ? "288px" : "240px",
                      height: index === 1 ? "540px" : "450px",
                      y: 30,
                    }}
                    animate={{
                      x: (index - 1) * 240,
                      y: 0,
                      zIndex: index === 1 ? 999 : 100 - index,
                      width: index === 1 ? "288px" : "240px",
                      height: index === 1 ? "540px" : "450px",
                      transition: { duration: 1 },
                    }}
                    muted
                  >
                    <source src={video.video} type="video/mp4" />
                  </Video>
                );
              })}
            </InterviewVideoContainer>
            <CoreDetailButton
              variants={ANIMATION_ITEM}
              onClick={() => {
                window.open(
                  "https://blog.toss.im/article/core-values-are-evolving"
                );
              }}
              whileHover={{
                scale: 1.1,
                border: "1px solid #4942ff",
                backgroundColor: "#ffffff",
                color: "var(--g-color-highlight)",
                transition: {
                  duration: 0.1,
                },
              }}
            >
              코어 밸류 자세히 보기
            </CoreDetailButton>
          </MainContentContainer>
          <BlankBox height="200px" />
        </>
      )}
    </MainContainer>
  );
}

export default Page3;
