import React from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import styled from "styled-components";

//Utilizando o styled-component
const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
  flex: 1;
`
function PageDefault({ children }) {//Realizando o destructuring
  return (
    //Utilizando o Fragments
    <>
      <Menu />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
