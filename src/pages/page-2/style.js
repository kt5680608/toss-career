import styled from "styled-components";

export const MainContainer = styled.section`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background-color: #4842f5;
`;

export const MainContentContainer = styled.div`
  width: 92%;
  height: 100%;
  margin: 0 auto;
  max-width: 960px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #4842f5;
`;

export const CardParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: ${(props) => props.marginRight && props.marginRight};
  width: 40%;
`;

export const Paragraph = styled.h2`
  font-size: 56px;
  font-weight: 800;
  line-height: 1.4;
  width: auto;
  white-space: pre-wrap;
  color: white;
  margin-bottom: 32px;
  text-align: left;
`;

export const SmallParagraph = styled.h2`
  font-size: 20px;
  color: white;
  font-weight: 600;
  line-height: 1.6;
  word-break: keep-all;
`;
