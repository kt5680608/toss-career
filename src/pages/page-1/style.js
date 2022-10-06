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

export const TextContainer = styled(motion.div)`
  position: absolute;
  top: 84px;
  height: ${(props) => props.height && props.height};
  width: 974px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

export const TimerContainer = styled.div`
  display: flex;
  margin-top: 39px;
  font-size: 56px;
  font-weight: 800;
  color: white;
  line-height: 70px;
  text-align: center;
  text-shadow: 0px 1px 2px rgb(0 0 0 / 25%);
  letter-spacing: -0.2px;
`;

export const PageTitle = styled.h1`
  display: block;
  font-size: 80px;
  font-style: normal;
  line-height: 1.2;
  text-align: center;
  white-space: pre-line;
  font-weight: 900;
  color: white;
`;

export const PageSubTitle = styled.h2`
  font-size: 56px;
  font-weight: 800;
  color: white;
  text-align: left;
  line-height: 1.4;
  word-break: keep-all;
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
