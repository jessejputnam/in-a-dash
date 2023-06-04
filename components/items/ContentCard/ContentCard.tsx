import { CardType } from "@/lib/types";
import styled from "styled-components";

import Card from "./Card";
import ImgWrapper from "./ImgWrapper";
import Img from "./Img";
import Info from "./Info";
import P from "./P";

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
