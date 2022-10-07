import React, { useState, useEffect } from "react";

import { useInView } from "react-intersection-observer";
import {
  PageSection,
  MainContainer,
  TitleContent,
  BreakLine,
  RecruitContainer,
  RecruitTitle,
  RecruitContent,
  Link,
} from "./style";

import { Spacer } from "../style";

import {
  ANIMATION_PARENT,
  ANIMATION_ITEM,
  RECRUIT_CONTENTS,
} from "../../assets";

function Page6() {
  const [ref, inView] = useInView();
  const [inViewControl, setInViewControl] = useState(false);

  useEffect(() => {
    if (inView && !inViewControl) {
      setInViewControl(true);
    }
  }, [inView]);
  return (
    <PageSection ref={ref}>
      {inViewControl && (
        <MainContainer
          variants={ANIMATION_PARENT}
          initial="hidden"
          animate="show"
        >
          <TitleContent variants={ANIMATION_ITEM}>
            여러분의 선택이 최고의 기회가 될 수 있도록 기존과 다른 합류 여정을
            제안합니다
          </TitleContent>
          <Spacer height="74px" />
          <BreakLine />
          {RECRUIT_CONTENTS.map((item) => {
            return (
              <>
                <Spacer height="40px" />
                <RecruitContainer variants={ANIMATION_ITEM}>
                  <RecruitTitle>{item.title}</RecruitTitle>
                  <Spacer height="10px"></Spacer>
                  <RecruitContent>{item.content}</RecruitContent>
                  {item?.link ? (
                    <>
                      <Spacer height="10px" />
                      <Link
                        onClick={() => {
                          window.open(`${item?.anchor}`);
                        }}
                      >
                        {item.link}
                      </Link>
                      <Spacer height="40px" />
                    </>
                  ) : (
                    <Spacer height="40px" />
                  )}
                  <BreakLine />
                </RecruitContainer>
              </>
            );
          })}
        </MainContainer>
      )}
    </PageSection>
  );
}

export default Page6;
