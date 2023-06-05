import Layout from "@/components/Layout";
import Posts from "@/components/sections/Posts";
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export default function PostsPage() {
  return (
    <Layout>
      <Page>
        <h1>Posts</h1>
        <p>Catch up with the latest posts from reddit</p>
        <Posts />
      </Page>
    </Layout>
  );
}
