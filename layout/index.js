import styled from "styled-components";
import Nav from "../components/Nav";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <Box>{children}</Box>
    </div>
  );
}

const Box = styled.div`
  max-width: 1100px;
  padding: 0 1.5rem;
  margin-left: auto;
  margin-right: auto;
`;
