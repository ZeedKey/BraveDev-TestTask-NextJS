import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 4rem;
`;

function MainLayout({ children }: JSX.ElementChildrenAttribute) {
  return (
    <Container>
      {children}
      <Footer />
    </Container>
  );
}

export default MainLayout;
