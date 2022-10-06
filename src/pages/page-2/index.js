import React from "react";

import {
  MainContainer,
  MainContentContainer,
  CardParagraphContainer,
  Paragraph,
  SmallParagraph,
} from "./style";

import { CardStack } from "../../components";

function Page2() {
  return (
    <MainContainer>
      <MainContentContainer>
        <CardParagraphContainer marginRight="40px">
          <Paragraph>
            토스가 만들고
            <br />
            싶은 새로운 내일,
            <br />
            어떤 모습인지
            <br />
            확인해보세요
          </Paragraph>
          <SmallParagraph>
            토스가 만들고 있는 금융의 변화, 당신도 직접 변화를 만들 수 있습니다.
            토스 각 계열사의 비전을 확인해보세요.
          </SmallParagraph>
        </CardParagraphContainer>
        <CardParagraphContainer marginRight="0">
          <CardStack />
        </CardParagraphContainer>
      </MainContentContainer>
    </MainContainer>
  );
}

export default Page2;
