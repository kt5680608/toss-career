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

export const ImageList = styled.ul`
  padding-left: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Image = styled(motion.img)`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const EventListItem = styled(motion.li)`
  width: 100%;
  height: 440px;
  list-style: none;
  position: relative;
  overflow: hidden;
  color: #ffffff;
  background-color: #4942ff;
  border-radius: 20px;
`;

export const EventItemContentContainer = styled.div`
  width: 50%;
  padding: 80px;
  box-sizing: border-box;
`;

export const EventItemTitle = styled.h3`
  font-weight: 800;
  width: 100%;
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  font-size: 40px;
  letter-spacing: -0.3px;
  line-height: 1.2;
  margin-bottom: 20px;
`;
export const EventItemContent = styled.p`
  font-weight: 600;
  flex-shrink: 0;
  width: 100%;
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  font-size: 20px;
  letter-spacing: -0.3px;
  line-height: 1.6;
`;
