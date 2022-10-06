import styled from "styled-components";

import { motion } from "framer-motion";

export const PageSection = styled.section`
  width: 100vw;
  background-color: var(--g-color-banner);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 560px;
  overflow: hidden;
`;
export const BannerDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BannerIamgeContainer = styled.div`
  width: 50%;
  height: 100%;
`;
export const BannerImage = styled.img`
  height: 100%;
`;

export const BannerTitle = styled.p`
  font-size: 56px;
  font-weight: 900;
  line-height: 1.4;
  color: #ffffff;
  text-align: left;
  margin-bottom: 56px;
`;

export const RecruitButton = styled(motion.button)`
  box-sizing: border-box;
  background-color: #ffffff;
  color: var(--g-color-banner);
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 180px;
  width: 40%;
  padding: 17px 30px;
  margin-top: 0 auto;
  font-size: 20px;
  border: none;
  border-radius: 43px;
  cursor: pointer;
  word-break: keep-all;
  white-space: nowrap;
`;
