import React, { useState, useEffect } from "react";

import {
  MainContainer,
  TitleContent,
  DayBox,
  Paragraph,
  StoryImage,
} from "./style";

import { BlankBox } from "../style";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import {
  TOSS_STORY_IMAGE,
  ANIMATION_PARENT,
  ANIMATION_ITEM,
} from "../../assets";

function Page4() {
  const [ref, inView] = useInView();
  const [inViewControl, setInViewControl] = useState(false);

  useEffect(() => {
    if (inView && !inViewControl) {
      setInViewControl(true);
    }
  }, [inView]);
  return (
    <MainContainer ref={ref}>
      {inViewControl && (
        <motion.div variants={ANIMATION_PARENT} initial="hidden" animate="show">
          <TitleContent variants={ANIMATION_ITEM}>
            토스는 어떻게 성장해 왔을까요?
            <br />
            토스의 성장 스토리를 공개합니다
            <DayBox variants={ANIMATION_ITEM}>D-4</DayBox>
            <Paragraph variants={ANIMATION_ITEM}>
              실패가 없다면 성장도, 성공도 없다고 믿습니다.
              <br />
              지난 반기의 성공⋅실패 사례를 통해 얻은 러닝과 다음 반기 성장의
              방향성을 공유하는 토스의 축제,
              <br />
              2022 상반기 얼라인먼트 데이 현장을 최초 공개합니다.
            </Paragraph>
          </TitleContent>
          <StoryImage src={TOSS_STORY_IMAGE} variants={ANIMATION_ITEM} />
          <BlankBox height="240px" />
        </motion.div>
      )}
    </MainContainer>
  );
}

export default Page4;
