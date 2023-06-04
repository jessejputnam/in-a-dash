import styles from "@/styles/Loading.module.css";
import styled from "styled-components";
import { keyframes } from "styled-components";

const loadingActive = keyframes`
  from {
    background-position: 0 0;
  }

  to {
    background-position: -200% -200%;
  }
`;

const Container = styled.div`
  width: 260px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

const Text = styled.p`
  font-family: var(--font-cursive);
  font-size: 2rem;
  color: var(--dark-blue);
`;

const Bars = styled.div`
  position: relative;
  overflow: hidden;
  height: 80%;
`;

const Bar = styled.div`
  height: 40px;
  background: var(--loading);
  background-size: 200%;
  animation: 0.7s infinite linear ${loadingActive};
  position: absolute;
`;

const Top = styled(Bar)`
  width: 100%;
  top: 0;
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%);
  -moz-clip-path: polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%);
  clip-path: polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%);
  border-top-left-radius: 10px;
`;

const Mid = styled(Bar)`
  width: 88%;
  top: 50px;
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 88% 100%, 0% 100%);
  -moz-clip-path: polygon(0% 0%, 100% 0%, 88% 100%, 0% 100%);
  clip-path: polygon(0% 0%, 100% 0%, 88% 100%, 0% 100%);
`;

const Low = styled(Bar)`
  width: 75%;
  top: 100px;
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 86% 100%, 0% 100%);
  -moz-clip-path: polygon(0% 0%, 100% 0%, 86% 100%, 0% 100%);
  clip-path: polygon(0% 0%, 100% 0%, 86% 100%, 0% 100%);
  border-bottom-left-radius: 10px;
`;

export default function Loading() {
  return (
    <Container>
      <Text>Loading...</Text>
      <Bars>
        <Top></Top>
        <Mid></Mid>
        <Low></Low>
      </Bars>
    </Container>
  );
}
