import styled from "styled-components";

const Li = styled.li`
  padding: 18px 25px;
  && * {
    font-size: 1.3rem;
    @media only screen and (max-width: 600px) {
      font-size: 2rem;
    }
  }
  @media (hover: hover) {
    &:hover {
      background-color: var(--dim-gray);
    }
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default Li;
