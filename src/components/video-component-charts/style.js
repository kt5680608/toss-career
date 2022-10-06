import styled from "styled-components";

import { motion } from "framer-motion";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const PinSpacer = styled.div`
  height: 500vh;
  width: 100vw;
  z-index: ${(props) => props.zIndex && props.zIndex};
`;

export const PinSpacerHero = styled.section`
  height: min-content;
  position: sticky;
  top: ${(props) => props.top && props.top};

  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify && props.justify};
  align-items: center;
`;
export const Video = styled(motion.video)`
  object-fit: scale-down;
  position: relative;
  width: 100vw;

  z-index: ${(props) => props.zIndex && props.zIndex};
`;

export const SubTitleContainer = styled(motion.div)`
  width: 92%;
  position: absolute;
  max-width: 920px;
  top: 84px;
  height: ${(props) => props.height && props.height};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const PageSubTitle = styled.h2`
  font-size: 56px;
  font-weight: 800;
  color: white;
  text-align: left;
  line-height: 1.4;
  word-break: keep-all;
  @media (max-width: 640px) {
    font-size: 32px;
  }
`;

export const DetailInfoMainContainer = styled.div`
  display: flex;
  margin-top: 64px;
  font-weight: 800;
  flex-direction: column;
`;

export const DetailInfoSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 48px;
  margin-top: ${(props) => props.marginTop && props.marginTop};
`;

export const PageDetailText = styled.h3`
  font-size: 15px;
  line-height: 1.5;
  font-weight: ${(props) => (props.weight ? props.weight : 800)};
  margin: 0;
  padding: 0;
  color: white;
`;

export const PageDetailCount = styled.p`
  font-size: 56px;
  line-height: 1.2;
  font-weight: 800;
  white-space: pre-line;
  color: white;
`;
