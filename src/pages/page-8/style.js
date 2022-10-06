import styled from "styled-components";

import { motion } from "framer-motion";

export const PageSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContainer = styled(motion.div)`
  width: 92%;
  height: 100%;
  margin: 0 auto;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const TitleContent = styled(motion.h2)`
  font-size: 56px;
  font-weight: 800 !important;
  line-height: 1.4;
  width: auto;
  color: #000000;
  white-space: pre-wrap;
  text-align: center;
  text-align: center;
  margin-bottom: 80px;
`;

export const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const SpanGuide = styled.span`
  display: block;
  word-break: keep-all;
  -webkit-font-smoothing: antialiased;
  margin-left: 10px;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  font-stretch: normal;
  line-height: 1.33;
  color: #4e5968;
  letter-spacing: -0.4px;
`;

export const EmailLink = styled.a`
  color: #64a8ff;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 56px;
  padding-top: 26px;
`;

export const Button = styled(motion.div)`
  width: 94px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 12px;
`;
export const ButtonBox = styled(motion.div)`
  width: 102px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const HighlightHr = styled(motion.hr)`
  position: absolute;
  width: 94px;
  margin: 0;
  bottom: 0;
`;

export const NormalHr = styled.hr`
  border-color: var(--g-color-grey-opacity100);
  position: absolute;
  width: 100%;
  margin: 0;
  bottom: 0;
`;

export const QuestionSpan = styled.span`
  margin-top: 30px;
  display: block;

  font-size: 19px;
  font-style: normal;
  font-weight: 800;
  font-stretch: normal;
  line-height: 30px;
  color: #333d4b;
  letter-spacing: -0.4px;
`;
export const AnswerSpan = styled.span`
  margin-top: 8px;
  display: block;
  word-break: keep-all;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  font-stretch: normal;
  line-height: 1.53;
  color: #6b7684;
  letter-spacing: -0.4px;
`;
