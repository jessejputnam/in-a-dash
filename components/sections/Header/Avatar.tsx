import styled from "styled-components";
import Icon from "./Icon";

const Avatar = styled.div<{ $menu: boolean }>`
  margin-right: 15px;
  border-radius: 50%;
  background: ${(props) =>
    props.$menu ? "var(--secondary-glow-darker)" : "var(--secondary-glow)"};
  box-shadow: 0 0 2px 0 var(--dark-box-shadow);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  width: 55px;
  cursor: pointer;
  @media (hover: hover) {
    :hover {
      background: var(--profile-image);
      ${Icon} {
        color: whitesmoke;
      }
    }
  }
`;

export default Avatar;
