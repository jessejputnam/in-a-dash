import styled from "styled-components";

const Home = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Title = styled.h1`
  margin-left: 30px;
  margin-bottom: 25px;
`;

export default function AuthHome() {
  return (
    <Home>
      <div>
        <Title>In a Dash</Title>
      </div>
      <p>Dashboard service for personalized news, video, and posts</p>
    </Home>
  );
}
