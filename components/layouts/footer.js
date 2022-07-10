import styled from "styled-components";
import Link from "next/link";

export default function footer() {
  return (
    <Container>
      <div>left</div>
      <div>right</div>
    </Container>
  );
}

const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 100px;
  background-color: #222;
  color: white;
  /* keeping footer stuck to bottom */
  margin-top: auto;
  div {
  }

  ul {
    display: flex;
    li {
      padding: 0 20px;
    }
  }
`;
