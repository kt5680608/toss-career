import styled from "styled-components";

import { motion } from "framer-motion";

export const CardWrapperContainer = styled(motion.div)`
  position: relative;
  width: 350px;
  height: 220px;
`;

export const MainCardContainer = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 500px;
`;

export const Card = styled(motion.img)`
  position: absolute;
  width: 360px;
  height: 480px;
  border-radius: 8px;
  transform-origin: top center;
  list-style: none;
  cursor: ${(props) => (props.canDrag ? "grab" : "auto")};
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
