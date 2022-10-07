import React, { useState } from "react";

import {
  PageSection,
  MainContainer,
  TitleContent,
  FaqContainer,
  SpanGuide,
  EmailLink,
  ButtonContainer,
  ButtonBox,
  Button,
  HighlightHr,
  NormalHr,
  QuestionSpan,
  AnswerSpan,
} from "./style";

import { Spacer } from "../style";

import { FAQ_CONTENTS } from "../../assets";

function Page8() {
  const menuList = [
    { title: "지원 관련", key: 0 },
    { title: "전형 관련", key: 1 },
    { title: "이벤트 관련", key: 2 },
  ];
  const [selected, setSelected] = useState(menuList[0].key);
  return (
    <PageSection>
      <MainContainer>
        <TitleContent>자주 묻는 질문</TitleContent>
        <FaqContainer>
          <SpanGuide>
            찾으시는 사항이 '자주 묻는 질문'에 없는 경우, 토스채용팀 이메일
            <EmailLink href="mailto: recruit@toss.im">
              (recruit@toss.im)
            </EmailLink>
            으로 문의해주세요.
          </SpanGuide>
          <ButtonContainer>
            {menuList?.map((item) => {
              return (
                <ButtonBox
                  onClick={() => {
                    setSelected(item?.key);
                  }}
                  key={item?.key}
                  animate={{
                    fontWeight: `${selected === item?.key ? 600 : 400}`,
                  }}
                >
                  <Button
                    whileHover={{
                      backgroundColor: `rgba(2,32,71,0.05)`,
                    }}
                  >
                    {item.title}
                  </Button>
                </ButtonBox>
              );
            })}
            <NormalHr />
            <HighlightHr initial={{ x: 0 }} animate={{ x: selected * 102 }} />
          </ButtonContainer>
          {FAQ_CONTENTS.map((item) => {
            if (item.id === selected) {
              return item.qna.map((qnaItem) => {
                return (
                  <>
                    <QuestionSpan>Q: {qnaItem.q}</QuestionSpan>
                    <AnswerSpan>{qnaItem.a}</AnswerSpan>
                  </>
                );
              });
            }
          })}
          <Spacer height="200px" />
        </FaqContainer>
      </MainContainer>
    </PageSection>
  );
}

export default Page8;
