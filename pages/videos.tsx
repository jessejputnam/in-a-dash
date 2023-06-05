import Layout from "@/components/Layout";
import Videos from "@/components/sections/Videos";
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export default function VideosPage() {
  return (
    <Layout>
      <Page>
        <h1>Videos</h1>
        <p>Discover the latest on YouTube</p>
        <Videos />
      </Page>
    </Layout>
  );
}
