import Link from "next/link";
import styled from "styled-components";

const Menu = styled.ul`
  position: absolute;
  left: 80px;
  display: flex;
  gap: 25px;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1.5rem;
  :hover {
    text-decoration: underline;
    text-underline-offset: 20px;
  }
`;

function Nav() {
  return (
    <Menu>
      <li>
        <StyledLink href='/articles'>Articles</StyledLink>
      </li>
      <hr />
      <li>
        <StyledLink href='/videos'>Videos</StyledLink>
      </li>
      <hr />
      <li>
        <StyledLink href='/posts'>Posts</StyledLink>
      </li>
    </Menu>
  );
}

export default Nav;
