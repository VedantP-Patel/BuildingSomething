import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  border-left: 4px solid #0066cc;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  h3 {
    color: #0066cc;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;

export const FeatureCard: React.FC<{ icon?: string; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <Card>
      <h3>{icon} {title}</h3>
      <p>{description}</p>
    </Card>
  );
};

export default FeatureCard;
