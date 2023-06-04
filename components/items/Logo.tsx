import styled from "styled-components";
import Link from "next/link";

const P = styled.p`
  color: white;
  font-size: 68px;
  font-family: var(--font-cursive);
  height: 100%;
  position: absolute;
  bottom: 15px;
  left: 8px;
  transform: rotate(5.5deg);
`;

const Clip = styled.div`
  background-color: var(--red);
  position: absolute;
  width: 70px;
  height: 8px;
  z-index: 2;
`;

const Bar = styled.div`
  height: 13px;
  background-color: white;
  position: absolute;
`;

const Div = styled.div`
  background-color: var(--red);
  height: 60px;
  width: 70px;
  position: relative;
  :hover {
    cursor: pointer;
    background-color: white;
  }
  &:hover {
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
`;

const Top = styled(Bar)`
  width: 43px;
  top: 7.8px;
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 75% 100%, 0% 100%);
  -moz-clip-path: polygon(0% 0%, 100% 0%, 75% 100%, 0% 100%);
  clip-path: polygon(0% 0%, 100% 0%, 75% 100%, 0% 100%);
`;

const Mid = styled(Bar)`
  width: 31px;
  top: 22.9px;
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 66% 100%, 0% 100%);
  -moz-clip-path: polygon(0% 0%, 100% 0%, 66% 100%, 0% 100%);
  clip-path: polygon(0% 0%, 100% 0%, 66% 100%, 0% 100%);
`;

const Low = styled(Bar)`
  width: 19px;
  top: 37.9px;
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 49% 100%, 0% 100%);
  -moz-clip-path: polygon(0% 0%, 100% 0%, 49% 100%, 0% 100%);
  clip-path: polygon(0% 0%, 100% 0%, 48% 100%, 0% 100%);
`;

export default function Logo() {
  return (
    <Link href='/'>
      <Div>
        <Clip></Clip>
        <Top></Top>
        <Mid></Mid>
        <Low></Low>
        <P>D</P>
      </Div>
    </Link>
  );
}
