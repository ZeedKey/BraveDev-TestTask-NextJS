import type { NextPage } from "next";
import styled from "styled-components";
import { OperatorCard as Card, MainLayout, operators } from "../components";

const OperatorsBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Home: NextPage = () => {
  return (
    <MainLayout>
      <OperatorsBlock>
        {operators.map((operator) => (
          <Card key={operator.name} name={operator.name} icon={operator.icon} />
        ))}
      </OperatorsBlock>
    </MainLayout>
  );
};

export default Home;
