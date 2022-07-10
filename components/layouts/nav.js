import styled from "styled-components";
import Link from "next/link";

export default function nav() {
  return (
    <Container>
      <div>
        <Link href={"/"}>
          <a>Logo</a>
        </Link>
      </div>
      <ul>
        <li>
          <Link href={"/articles/china"}>
            <a>China</a>
          </Link>
        </li>
        <li>
          <Link href={"/articles/japan"}>
            <a>Japan</a>
          </Link>
        </li>
        <li>
          <Link href={"/articles/korea"}>
            <a>Korea</a>
          </Link>
        </li>
      </ul>
    </Container>
  );
}

const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  div {
  }

  ul {
    display: flex;
    li {
      padding: 0 20px;
    }
  }
`;
