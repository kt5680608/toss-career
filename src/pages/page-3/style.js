import styled from "styled-components";

import { motion } from "framer-motion";

export const MainContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContentContainer = styled(motion.div)`
  width: 92%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding-top: 200px;
  max-width: 960px;
  box-sizing: border-box;
`;

export const TitleContainer = styled.div`
  width: 100%;
`;

export const PageTitle = styled.h2`
  font-size: 56px;
  font-weight: 800 !important;
  line-height: 1.4;
  color: #000000;
  width: auto;
  text-align: center;
  margin-bottom: 32px;
  white-space: pre-wrap;
  word-break: keep-all;
`;

export const PageTitleDetail = styled(motion.p)`
  font-size: 20px;
  line-height: 1.5;
  color: var(--g-color-paragraph-grey);
  width: 100%;
  font-weight: 600;
  margin-bottom: 80px;
  text-align: center;
`;

export const Video = styled(motion.video)`
  border-radius: 24px;
  position: absolute;
  width: 25%;
  height: 100%;
  object-fit: cover;
  flex: 1;
  cursor: pointer;
`;

export const InterviewVideoContainer = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  perspective: 1200px;
  height: 450px;
`;

export const CoreDetailButton = styled(motion.button)`
  box-sizing: border-box;
  background-color: var(--g-color-highlight);
  color: #ffffff;
  width: auto;
  padding: 17px 30px;
  margin-top: 144px;
  font-size: 20px;
  border: none;
  border-radius: 43px;
  cursor: pointer;
`;
