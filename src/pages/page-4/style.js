import styled from "styled-components";

import { motion } from "framer-motion";
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
  font-weight: 800;
  width: auto;
  line-height: 1.4;
  white-space: pre-wrap;
  text-align: center;
  margin-bottom: 80px;
  color: #000000;
`;

export const DayBox = styled(motion.div)`
  margin: 32px 0;
  color: var(--g-color-highlight);
  font-weight: 900;
  font-size: 80px;
`;

export const Paragraph = styled(motion.p)`
  font-size: 20px;
  font-weight: 600;
  color: var(--g-color-paragraph-grey);
  width: 100%;
  text-align: center;
  line-height: 1.6;
`;

export const StoryImage = styled(motion.img)`
  width: 100%;
  height: auto;
`;
