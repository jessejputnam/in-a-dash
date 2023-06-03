import { signIn } from "next-auth/react";
import styled from "styled-components";

const Landing = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  max-width: var(--max-width);
  width: 80%;
`;

const TitleContainer = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  margin-left: 30px;
  margin-bottom: 25px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  && i {
    color: var(--red);
    font-weight: bold;
    font-size: 1.4rem;
  }
`;

const SignupBtn = styled.button`
  padding: 20px 40px;
`;

export default function NoAuthHome() {
  return (
    <Landing>
      <TitleContainer>
        <Title>In a Dash</Title>
        <Subtitle>Get quick updates on the world</Subtitle>
        <Subtitle>
          Save and share them <i>in a dash</i>
        </Subtitle>
      </TitleContainer>

      <SignupBtn className='btn btn-primary' onClick={() => signIn()}>
        Sign Up
      </SignupBtn>

      <p>
        A personal dashboard for all your interests. Choose preferences in
        topics and you will gain access to news, blogs, posts, videos, etc
        personalized to your own taste.
      </p>
      <p>
        When you find anything that interests you, you can save it to personal
        boards for later access. You can also share and comment saved boards or
        saved items with friends.
      </p>
    </Landing>
  );
}
