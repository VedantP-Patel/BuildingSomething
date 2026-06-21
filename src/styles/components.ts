import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Section = styled.section`
  margin: 4rem 0;
  padding: 3rem 2rem;
  border-radius: 8px;
  background-color: #fafafa;

  h2 {
    margin-bottom: 1.5rem;
    color: #1a1a1a;
  }

  @media (max-width: 768px) {
    margin: 2rem 0;
    padding: 1.5rem 1rem;
  }
`;

export const Button = styled.button`
  background-color: #0066cc;
  color: white;
  padding: 0.875rem 1.75rem;
  font-weight: 600;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0052a3;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: none;
  }

  &.secondary {
    background-color: #f0f0f0;
    color: #1a1a1a;
    border: 1px solid #ddd;

    &:hover {
      background-color: #e0e0e0;
    }
  }

  &.danger {
    background-color: #dc3545;

    &:hover {
      background-color: #bb2d3b;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 500px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-weight: 500;
    color: #333;
  }

  input,
  textarea {
    padding: 0.875rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: #0066cc;
      box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
    }
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }
`;

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  h3 {
    margin-bottom: 1rem;
    color: #1a1a1a;
  }

  p {
    color: #666;
    line-height: 1.8;
  }
`;
