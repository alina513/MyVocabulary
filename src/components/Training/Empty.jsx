import { useState } from "react";

import { Wrapper, BtnWrapper, Btn, BtnCancel, Img, Title, Text } from "./Empty.styled";

import img1 from "../../assets/background/book.png";
import img2 from "../../assets/background/b00k2x.png";

export const Empty = () => {
  

  return (
    <Wrapper>
      <div>
        <Title>You don't have a single word to learn right now. </Title>
        <Text>
          Please create or add a word to start the workout. We want to improve
          your vocabulary and develop your knowledge, so please share the words
          you are interested in adding to your study.
        </Text>
        <BtnWrapper>
          <Btn
          >
            Add word
          </Btn>
          <BtnCancel>
            Cancel
          </BtnCancel>
        </BtnWrapper>
      </div>
      <Img
        srcSet={`${img1} 1x, ${img2} 2x`}
        src={img1}
        alt="blood report"
        width="265"
        height="283"
      />
    </Wrapper>
  );
};

