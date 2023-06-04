import { CardType } from "@/lib/types";
import Image from "next/image";
import styled from "styled-components";

import Card from "./Card";

const ImgWrapper = styled.a`
  min-height: 150px;
  min-width: 275px;
  position: relative;
`;

const Img = styled(Image)`
  border-radius: 10px;
  box-shadow: 0 0 3px 0 var(--dark-box-shadow);
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const P = styled.p`
  overflow-wrap: break-word;
`;

function ContentCard(data: CardType) {
  const { type, url, title, desc, src } = data;

  return (
    <Card>
      <ImgWrapper href={url} target='_blank'>
        <Img
          loader={() => src}
          unoptimized
          src={src}
          alt={`${type} thumbnail`}
          style={{ objectFit: "cover" }}
          fill
        ></Img>
      </ImgWrapper>
      <Info>
        <a href={url} target='_blank'>
          <h3>{title}</h3>
        </a>
        <P>{desc}</P>
      </Info>
    </Card>
  );
}

export default ContentCard;
