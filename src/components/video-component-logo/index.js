import React, { useState, useEffect, useRef } from "react";

import { useTimer } from "use-timer";

import {
  Video,
  PinSpacer,
  PinSpacerHero,
  TextContainer,
  PageTitle,
  TimerContainer,
} from "./style";

import { MAIN_VIDEO } from "../../assets";

function LogoVideoComponent() {
  const [_, setVideoPercent] = useState(0);
  const { time } = useTimer({
    initialTime: 2.592e6,
    timerType: "DECREMENTAL",
    autostart: true,
  });
  const scrollContainerRef = useRef(null);
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

  function secondsToDhms(seconds) {
    seconds = Number(seconds);
    const day = Math.floor(seconds / (3600 * 24));
    const hour = Math.floor((seconds % (3600 * 24)) / 3600);
    const minute = Math.floor((seconds % 3600) / 60);
    const second = Math.floor(seconds % 60);
    const dDisplay =
      day > 0 ? (getDigit(day) === 1 ? `0${day} 일 ` : `${day} 일 `) : "00 일 ";
    const hDisplay =
      hour > 0
        ? getDigit(hour) === 1
          ? `0${hour} : `
          : `${hour} : `
        : "00 : ";
    const mDisplay =
      minute > 0
        ? getDigit(minute) === 1
          ? `0${minute} : `
          : `${minute} : `
        : " 00 : ";
    const sDisplay =
      second > 0
        ? getDigit(second) === 1
          ? `0${second}`
          : `${second}`
        : " 00";
    return dDisplay + hDisplay + mDisplay + sDisplay;
  }

  function getDigit(num) {
    num = num.toString();
    let i = 0;
    while (num[i]) {
      i++;
    }
    return i;
  }

  useEffect(() => {
    registerVideo("#bound", "#bound video");
    registerVideo("#bound-two", "#bound-two video");
  }, []);
  return (
    <PinSpacer id="bound" ref={scrollContainerRef}>
      <PinSpacerHero top="0px" height="100vh" justify="center">
        <Video src={MAIN_VIDEO} playsInline preload="metadata" />
        <TextContainer height="calc(var(--vh, 1vh) * 50);">
          <PageTitle>
            아직 끝나지 않은
            <br />
            토스의 성장을 위해
          </PageTitle>
          <TimerContainer>{secondsToDhms(time)}</TimerContainer>
        </TextContainer>
      </PinSpacerHero>
    </PinSpacer>
  );
}
export default LogoVideoComponent;
