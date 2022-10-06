import styled from "styled-components";

import { motion } from "framer-motion";

export const PageSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  padding: 160px 0;
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
  font-size: 54px;
  font-weight: 800;
  line-height: 1.4;
  white-space: pre-wrap;
  text-align: center;
  color: #000000;
  width: auto;
`;

export const BreakLine = styled.hr`
  width: 100%;
  height: 1px;
  background: #001b37;
  box-sizing: content-box;
  opacity: 0.1;
  border: none;
`;

export const RecruitContainer = styled(motion.div)`
  width: 100%;
  display: block;
`;

export const RecruitTitle = styled.h3`
  font-size: 20px;
  font-style: normal;
  font-weight: bold;
  line-height: 140%;
`;

export const RecruitContent = styled.li`
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  color: #6b7684;
  list-style: inside;
`;

export const Link = styled.a`
  color: #4942ff;
  font-weight: 500;
  padding-left: 0;
  -webkit-text-decoration: none;
  text-decoration: none;
  border-bottom: 1px solid #4942ff;
  cursor: pointer;
`;
