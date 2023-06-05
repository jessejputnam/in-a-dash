import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = styled(FontAwesomeIcon)<{ $menu: boolean }>`
  height: 35px;
  color: ${(props) =>
    props.$menu ? "rgba(101, 101, 101, 0.67)" : "var(--profile-image);"};
`;

export default Icon;
