import React from "react";
import Navigation from "../Navigation";
import { navigate } from "../../data/navigate";
import Container from '../Container'

export default function AppBar() {
  return (
    <header>
        <Container >
      <Navigation items={navigate} />
      </Container>
    </header>
  );
}
