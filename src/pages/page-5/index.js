import React, { useRef, useState, useEffect } from "react";

import { useInView } from "react-intersection-observer";
import {
  PageSection,
  MainContainer,
  TitleContent,
  SupportContainer,
  SupportDetailContainer,
  SupportTitle,
  SupportContent,
  MoreDetailButton,
  ParallaxImage,
} from "./style";

import { BlankBox } from "../style";

import { motion } from "framer-motion";

import { useTransform, useScroll } from "framer-motion";

import {
  PARALLAX_IMAGE_1,
  PARALLAX_IMAGE_2,
  PARALLAX_IMAGE_3,
  PARALLAX_IMAGE_4,
  SUPPORT_CONTENTS,
  ANIMATION_PARENT,
  ANIMATION_ITEM,
} from "../../assets";

function Page5() {
  const scrollRef = useRef(null);
  const [ref, inView] = useInView();
  const { scrollY } = useScroll();
  const [inViewControl, setInViewControl] = useState(false);

  const y1 = useTransform(
    scrollY,
    [
      scrollRef?.current?.offsetTop - 100,
      scrollRef?.current?.offsetTop + scrollRef?.current?.scrollHeight,
    ],
    [0, -400]
  );
  const y2 = useTransform(
    scrollY,
    [
      scrollRef?.current?.offsetTop - 100,
      scrollRef?.current?.offsetTop + scrollRef?.current?.scrollHeight,
    ],
    [0, -600]
  );

  useEffect(() => {
    if (inView) {
      setInViewControl(true);
    }
  }, [inView]);
  return (
    <PageSection ref={scrollRef}>
      <motion.div>
        <MainContainer
          ref={ref}
          variants={ANIMATION_PARENT}
          initial="hidden"
          whileInView="show"
        >
          {inViewControl && (
            <>
              <TitleContent variants={ANIMATION_ITEM}>
                몰입하는 당신을 위한
                <br />
                아낌 없는 보상과 지원
              </TitleContent>
              <BlankBox height="80px" />
              <SupportContainer variants={ANIMATION_ITEM}>
                {SUPPORT_CONTENTS.map((item) => {
                  return (
                    <SupportDetailContainer>
                      <SupportTitle>{item.title}</SupportTitle>
                      <SupportContent>{item.content}</SupportContent>
                    </SupportDetailContainer>
                  );
                })}
              </SupportContainer>
              <BlankBox height="80px" />
              <MoreDetailButton
                variants={ANIMATION_ITEM}
                onClick={() => {
                  window.open("https://toss.oopy.io/");
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
                더 알아보기
              </MoreDetailButton>
            </>
          )}
        </MainContainer>
        <>
          <ParallaxImage
            src={PARALLAX_IMAGE_1}
            height="238px"
            top="-32px"
            right="-108px"
            opacity={1}
            style={{ y: y1 }}
          />
          <ParallaxImage
            opacity={0.8}
            src={PARALLAX_IMAGE_2}
            height="468px"
            bottom="211px"
            left="-108px"
            style={{ y: y2 }}
          />
          <ParallaxImage
            src={PARALLAX_IMAGE_3}
            height="387px"
            bottom="165px"
            right="-76px"
            animate={{ rotate: -127 }}
            style={{ y: y2 }}
          />
          <ParallaxImage
            src={PARALLAX_IMAGE_4}
            height="232px"
            bottom="85px"
            left="518px"
            opacity={0.7}
            animate={{ rotate: 103 }}
            style={{ y: y2 }}
          />
        </>
      </motion.div>
    </PageSection>
  );
}

export default Page5;
