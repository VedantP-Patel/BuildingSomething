import styled from 'styled-components';

export const Header = styled.header`
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  padding: 1.5rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #0066cc;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #0052a3;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;

  a {
    color: #1a1a1a;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #0066cc;
    }

    &.active {
      color: #0066cc;
      border-bottom: 2px solid #0066cc;
      padding-bottom: 0.25rem;
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;
    font-size: 0.9rem;
  }
`;

export const Footer = styled.footer`
  background-color: #f5f5f5;
  border-top: 1px solid #e0e0e0;
  padding: 3rem 2rem;
  margin-top: 4rem;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  h4 {
    margin-bottom: 1rem;
    color: #1a1a1a;
  }

  ul {
    list-style: none;

    li {
      margin-bottom: 0.5rem;

      a {
        color: #666;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: #0066cc;
        }
      }
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;
