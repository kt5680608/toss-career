import React from "react";

import {
  PageSection,
  BannerImage,
  BannerIamgeContainer,
  BannerDetailContainer,
  BannerTitle,
  RecruitButton,
} from "./style";

import { STATIC_TOSS_BANNER } from "../../assets";
function Page9() {
  return (
    <PageSection>
      <BannerIamgeContainer>
        <BannerImage src={STATIC_TOSS_BANNER} />
      </BannerIamgeContainer>
      <BannerDetailContainer>
        <BannerTitle>
          변화를 만들 수 있는 기회,
          <br />
          바로 지금입니다
        </BannerTitle>
        <RecruitButton
          onClick={() => {
            window.location.href = "https://toss.im/career/jobs";
          }}
          whileHover={{
            scale: 1.1,
            border: "1px solid white",
            backgroundColor: "var(--g-color-banner)",
            color: "white",
            transition: {
              duration: 0.1,
            },
          }}
        >
          채용 중인 공고 보기
        </RecruitButton>
      </BannerDetailContainer>
    </PageSection>
  );
}

export default Page9;
