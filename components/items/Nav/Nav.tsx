import Menu from "./Menu";
import StyledLink from "./StyledLink";

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
