import { Top, Mid, Low } from "./Bar";
import Container from "./Container";
import Text from "./Text";
import Bars from "./Bars";

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
