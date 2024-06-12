import styled from 'styled-components';

export const Stat = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: rgba(18, 20, 23, 0.5);
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Span = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  color: ${p => p.theme.colors.black};
`;
