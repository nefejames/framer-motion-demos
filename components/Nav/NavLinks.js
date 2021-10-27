import styled from "styled-components";

const routes = [
  { name: "Hero", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Faq", href: "/faq" },
  { name: "Modal", href: "/modal" },
  { name: "SVG", href: "/svg" },
  { name: "Scroll Animation", href: "/scroll-anim" },
];

export default function NavLinks({ open, setOpen }) {
  return (
    <StyledUl open={open}>
      {routes.map((route, i) => (
        <li key={i} onClick={() => setOpen(!open)}>
          <a href={route.href}>{route.name}</a>
        </li>
      ))}
    </StyledUl>
  );
}

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 500px;
  }

  //li styles
  li {
    font-size: 1rem;

    @media (max-width: 768px) {
      margin-bottom: 2rem;
    }
  }

  //a styles
  a {
    text-decoration: none;
    color: #23242a;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
    background-color: inherit;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
    padding-top: 6rem;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  }
`;
