import React from "react";

import {
  PageSection,
  MainContainer,
  Image,
  ImageList,
  TitleContent,
  EventListItem,
  EventItemContentContainer,
  EventItemTitle,
  EventItemContent,
} from "./style";

import { EVENT_CONTENTS } from "../../assets";

import { Spacer } from "../style";
function Page7() {
  return (
    <PageSection>
      <MainContainer>
        <Spacer height="200px" />
        <TitleContent>
          여러분의 성장에
          <br />
          토스가 힘이 되어 드리겠습니다
        </TitleContent>
        <ImageList>
          {EVENT_CONTENTS.map((item) => {
            return (
              <EventListItem>
                <Image src={item.image} />
                <EventItemContentContainer>
                  <EventItemTitle>{item.title}</EventItemTitle>
                  <EventItemContent>{item.content}</EventItemContent>
                </EventItemContentContainer>
              </EventListItem>
            );
          })}
        </ImageList>
      </MainContainer>
      <Spacer height="200px" />
    </PageSection>
  );
}

export default Page7;
