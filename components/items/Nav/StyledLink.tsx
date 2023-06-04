import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled(Link)`
  font-size: 1.5rem;
  :hover {
    text-decoration: underline;
    text-underline-offset: 20px;
  }
`;

export default StyledLink;
