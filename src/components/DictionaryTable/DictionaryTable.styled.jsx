import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${p => p.theme.colors.white};
  border-radius: 15px;
  margin-right: auto;
  margin-left: auto;

  padding: 14px;
  width: 343px;
  height: 563px;
  margin-top: 32px;

  @media screen and (min-width: 1440px) {
    padding: 18px;
    width: 1240px;
    height: 640px;
    margin-top: 37px;
  }
`;
export const Container = styled.div`
  width: 343px;
  @media screen and (min-width: 1440px) {
    width: 1240px;
    height: 540px;
  }
`;

export const Table = styled.table`
  width: 303px;
  height: 540px;

  @media screen and (min-width: 1440px) {
    width: 1240px;
    height: 540px;
    margin-right: auto;
    margin-left: auto;
    border-collapse: collapse;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 0 1px ${p => p.theme.colors.white};
  }
`;
export const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Th = styled.th`
  padding: 0px;
  height: 54px;
  font-weight: 500;
  font-size: 16px;

  @media screen and (min-width: 1440px) {
    border-bottom: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
    text-align: left;
    padding: 0px 22px 0px 22px;
    height: 72px;
    background-color: rgba(133, 170, 159, 0.1);
    font-weight: 500;
    font-size: 20px;
    color: ${p => p.theme.colors.black};
  }
`;

export const Tr = styled.tr`
  height: 70px;

  &:last-child td {
    border-bottom: none;
  }
  background-color: #fcfcfc;
  @media screen and (min-width: 1440px) {
    height: 80px;
  }
`;

export const Td = styled.td`
font-weight: 500;
font-size: 14px;
color: ${p => p.theme.colors.black};

&.category-exam {
  display: none;
}
border-bottom: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
  padding: 0px;

  &:last-child {
    border-right: none; /* Прибираємо правий бордер у останньої комірки в рядку */
  }

  @media screen and (min-width: 768px) {
    &.category-exam {
      display: table-cell;
    }

  @media screen and (min-width: 1440px) {
    font-weight: 500;
font-size: 20px;
padding:  15px 22px 15px 22px;
  }
`;
export const Button = styled.button`
  border: none;
  background-color: transparent;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.green};
  }
`;

export const Svg = styled.svg`
  display: none;
  width: 32px;
  height: 32px;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;
export const Hidden = styled.span`
  display: none;
`;
export const SvgAdd = styled.svg`
  width: 20px;
  height: 20px;
`;

export const SpanAdd = styled.span`
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const ButtonAdd = styled.button`
  font-weight: 500;
  font-size: 20px;
  color: ${p => p.theme.colors.black};
  border: none;
  background-color: transparent;
  display: block;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.green};
  }
`;
