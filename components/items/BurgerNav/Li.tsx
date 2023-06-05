import styled from "styled-components";

const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--dark-gray);
  font-weight: 300;
  font-size: 2rem;
  padding: 31px 25px;

  @media (hover: hover) {
    &:hover {
      color: var(--red);
    }
  }
`;

export default Li;
