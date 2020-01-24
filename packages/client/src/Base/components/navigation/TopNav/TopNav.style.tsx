import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-height: 32px;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export const Name = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #DADADA;
`;