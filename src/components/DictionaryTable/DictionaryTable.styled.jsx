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
  @media screen and (min-width: 768px) {
    width: 704px;
    height: 616px;
  }

  @media screen and (min-width: 1440px) {
    padding: 18px;
    width: 1240px;
    height: 670px;
    margin-top: 37px;
  }
`;
export const Container = styled.div`
  width: 343px;
  @media screen and (min-width: 768px) {
    width: 704px;
  }
  @media screen and (min-width: 1440px) {
    width: 1240px;
    height: 640px;
  }
`;

export const Table = styled.table`
  box-sizing: border-box;
  width: 315px;
  height: 540px;

  @media screen and (min-width: 768px) {
    width: 676px;
    height: 566px;
  }

  @media screen and (min-width: 1440px) {
    width: 1204px;
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
  gap: 10px;
  @media screen and (min-width: 1440px) {
    justify-content: space-between;
    gap: 0px;
  }
`;

export const Th = styled.th`
  border-bottom: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
  padding: 0px 0px 0px 3px;
  height: 72px;
  background-color: rgba(133, 170, 159, 0.1);
  font-weight: 500;
  font-size: 10px;
  &:first-child {
    padding-left: 6px;
  }
  @media screen and (min-width: 768px) {
    padding: 0px 12px 0px 12px;
    text-align: left;
    font-size: 14px;
    &:first-child {
      padding-left: 12px;
    }
  }
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
    &:first-child {
      padding-left: 22px;
    }
  }
`;

export const Tr = styled.tr`
  height: 30px;

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
  font-size: 10px;
  color: ${p => p.theme.colors.black};
  border-bottom: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
  padding: 10px 4px 10px 4px;

  &:last-child {
    border-right: none;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    padding: 10px 0px 10px 14px;
  }

  @media screen and (min-width: 1440px) {
    font-weight: 500;
    font-size: 20px;
    padding: 0px 22px 0px 22px;
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

export const SpanAddWord = styled.span`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const SpanAdd = styled.span`
  @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 16px;
    display: block;
    align-items: center;
    gap: 8px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
  }
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

export const ConProcent = styled.div`
  display: flex;
  gap: 7px;
`;
export const Procent = styled.p`
  display: none;
  @media screen and (min-width: 1440px) {
    display: flex;
    font-weight: 500;
    font-size: 22px;
  }
`;
