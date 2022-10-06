import styled from "styled-components";

import { motion } from "framer-motion";

export const NavMainContainer = styled.nav`
  position: fixed;
  z-index: 999;
  width: 100vw;
  height: 60px;
  border-bottom: 1px solid transparent;
  background-color: rgba(0, 29, 58, 0.18) !important;
  transition: background-color 0.2s ease;
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavPContainer = styled.div`
  max-width: 1140px;
  height: 100%;
  margin: auto;
  box-sizing: border-box;
  width: 70%;
  display: flex;
  justify-content: space-between;
`;
export const TossImageContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TossImageLogo = styled.img`
  height: 22px;
  margin-top: -1px;
`;

export const Menubar = styled.ul``;
export const MenuItem = styled.li`
  height: 100%;

  list-style: none;
  display: flex;
  align-items: center;
  color: white;
  box-sizing: border-box;
`;

export const MenuItemLink = styled(motion.a)`
  padding: 12px 10px;
  font-size: 15px;
  line-height: 20px;
  color: white;
  border-radius: 8px;
  border: 0;
  white-space: nowrap;
  cursor: pointer;
  background-color: transparent;
  text-decoration: none;
  text-align: left;
`;
