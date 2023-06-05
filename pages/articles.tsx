import Layout from "@/components/Layout";
import Articles from "@/components/sections/Articles";
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export default function ArticlesPage() {
  return (
    <Layout>
      <Page>
        <h1>Articles</h1>
        <p>Catch up with the latest news and articles across the internet</p>
        <Articles />
      </Page>
    </Layout>
  );
}
