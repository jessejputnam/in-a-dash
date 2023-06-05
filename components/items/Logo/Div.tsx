import styled from "styled-components";
import P from "./P";
import Clip from "./Clip";
import { Bar } from "./Bar";

const Div = styled.div`
  background-color: var(--red);
  height: 60px;
  width: 70px;
  position: relative;
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      background-color: white;

      ${Clip} {
        background-color: white;
      }

      ${Bar} {
        background-color: var(--red);
      }

      ${P} {
        color: var(--red);
      }
    }
  }
`;

export default Div;
