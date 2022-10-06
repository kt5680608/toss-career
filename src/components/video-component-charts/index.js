import React, { useState, useEffect, useRef } from "react";

import {
  Video,
  PinSpacer,
  PinSpacerHero,
  PageDetailText,
  PageDetailCount,
  PageSubTitle,
  SubTitleContainer,
  DetailInfoMainContainer,
  DetailInfoSubContainer,
} from "./style";

import { useScroll, useTransform } from "framer-motion";

import { CHART_VIDEO } from "../../assets";

function ChartVideoComponent() {
  const [videoPercent, setVideoPercent] = useState(0);

  const scrollContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(
    scrollYProgress,
    [0.066, 0.132, 0.198, 0.264, 0.33],
    [60, 0, 0, 0, -60]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0.33, 0.396, 0.462, 0.528, 0.66],
    [60, 0, 0, 0, -60]
  );
  const y3 = useTransform(
    scrollYProgress,
    [0.66, 0.726, 0.792, 0.858, 1],
    [120, 90, 90, 90, 60]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0.066, 0.132, 0.198, 0.264, 0.33],
    [0, 1, 1, 1, 0]
  );
  const opacity2 = useTransform(
    scrollYProgress,
    [0.33, 0.396, 0.462, 0.528, 0.66],
    [0, 1, 1, 1, 0]
  );
  const opacity3 = useTransform(scrollYProgress, [0.66, 0.726, 1], [0, 1, 1]);

  const registerVideo = (bound, video) => {
    bound = document.querySelector(bound);
    video = document.querySelector(video);

    const scrollVideo = () => {
      if (video?.duration) {
        const distanceBetweenTopAndScrollLocation =
          bound.getBoundingClientRect().top; // getBoundingClientRect() 엘리먼트 크기와 뷰포트에 상대적인 위치 정보를 제공
        const rawPercentScrolled =
          -distanceBetweenTopAndScrollLocation /
          (bound.scrollHeight - window.innerHeight);
        const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);
        video.currentTime = video.duration * percentScrolled;
        setVideoPercent(video.currentTime);
      }
      requestAnimationFrame(scrollVideo);
    };
    requestAnimationFrame(scrollVideo);
  };

  useEffect(() => {
    registerVideo("#bound", "#bound video");
    registerVideo("#bound-two", "#bound-two video");
  }, []);
  return (
    <PinSpacer id="bound-two" ref={scrollContainerRef}>
      <PinSpacerHero top="-150px" height="100vh" justify="flex-start">
        <Video src={CHART_VIDEO} playsInline preload="metadata" />
        {videoPercent < 1.891 && (
          <SubTitleContainer
            height="calc(var(--vh, 1vh) * 66);"
            style={{ opacity: opacity, y }}
            whileInView={{ y: 0 }}
          >
            <PageSubTitle>
              지금보다 더 편리하고 안전한 금융을 위한 토스의 도전은 계속됩니다
            </PageSubTitle>
          </SubTitleContainer>
        )}
        {videoPercent < 3.783 && videoPercent > 1.891 && (
          <SubTitleContainer
            height="calc(var(--vh, 1vh) * 66);"
            style={{ opacity: opacity2, y: y2 }}
          >
            <PageSubTitle>
              사람들의 삶을 완전히 바꾸었고,
              <br />
              앞으로도 바꿔나갈 혁신의 여정에
              <br />
              함께할 동료를 기다립니다
            </PageSubTitle>
          </SubTitleContainer>
        )}
        {videoPercent > 3.783 && (
          <SubTitleContainer
            height="calc(var(--vh, 1vh) * 66);"
            style={{ opacity: opacity3, y: y3 }}
          >
            <PageSubTitle>
              토스가 꾸는 꿈의 크기는 계속 커지고 있습니다.
            </PageSubTitle>
            <DetailInfoMainContainer>
              <div style={{ display: "flex" }}>
                <DetailInfoSubContainer>
                  <PageDetailText>계열사 수</PageDetailText>
                  <PageDetailCount>9개 +</PageDetailCount>
                </DetailInfoSubContainer>
                <DetailInfoSubContainer>
                  <PageDetailText>전체 직원수</PageDetailText>
                  <PageDetailCount>1,800 명+</PageDetailCount>
                </DetailInfoSubContainer>
              </div>
              <DetailInfoSubContainer marginTop="20px">
                <PageDetailText weight={400}>2022년 9월 기준</PageDetailText>
              </DetailInfoSubContainer>
            </DetailInfoMainContainer>
          </SubTitleContainer>
        )}
      </PinSpacerHero>
    </PinSpacer>
  );
}

export default ChartVideoComponent;
