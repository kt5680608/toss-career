import styled from "styled-components";

import { motion } from "framer-motion";

export const PageSection = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 240px;
  position: relative;
`;
export const MainContainer = styled(motion.div)`
  width: 92%;
  height: 100%;
  margin: 0 auto;
  max-width: 960px;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const TitleContent = styled(motion.h2)`
  font-size: 56px;
  font-weight: 800;
  line-height: 1.4;
  width: auto;
  color: #000000;
  white-space: pre-wrap;
  text-align: center;
`;

export const ParallaxImage = styled(motion.img)`
  opacity: ${(props) => props.opacity && props.opacity};
  height: ${(props) => props.height && props.height};
  position: absolute;
  top: ${(props) => props.top && props.top};
  right: ${(props) => props.right && props.right};
  bottom: ${(props) => props.bottom && props.bottom};
  left: ${(props) => props.left && props.left};
  z-index: -999;
`;

export const SupportContainer = styled(motion.div)`
  display: flex;
  width: 100%;
`;

export const SupportDetailContainer = styled.div`
  background-color: #d9d9d920;
  backdrop-filter: blur(8px);
  padding: 48px;
  width: 100%;
  height: 450px;
  border-radius: 24px;
  margin-right: 20px;
  box-sizing: border-box;
  position: relative;
  z-index: 100;
`;

export const SupportTitle = styled.p`
  font-size: 28px;
  letter-spacing: 0px;
  line-height: 1.4;
  font-weight: 800;
  margin-bottom: 20px;
  white-space: pre-line;
`;

export const SupportContent = styled.p`
  color: var(--g-color-paragraph-grey);
  font-weight: 600;
  letter-spacing: 0px;
  font-size: 18px;
  line-height: 1.6;
  white-space: pre-line;
`;

export const MoreDetailButton = styled(motion.button)`
  box-sizing: border-box;
  background-color: var(--g-color-highlight);
  color: #ffffff;
  width: auto;
  padding: 17px 30px;
  margin-top: 0 auto;
  font-size: 20px;
  border: none;
  border-radius: 43px;
  cursor: pointer;
  position: relative;
  z-index: 100;
`;
