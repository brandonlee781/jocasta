import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  background: rgba(229, 229, 229, 0.12);
  border-radius: 25px;
  padding: 16px 0;
  width: 100%;
  margin-bottom: 6px;
  height: 155px;
  justify-content: space-between;

  & > div:first-child {
    margin-bottom: 8px;
  }
`;

export const AttributeRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
`;

export const AttributeItemWrapper = styled.div`
  display: grid;
  grid-template-rows: 20px 1fr;
  grid-template-columns: 100%;
  justify-content: center;
  align-content: center;
  height: 48px;
  width: 64px;

  .title {
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    color: #E2E2E2;
  }
  .value {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #FFFFFF;
  }
`;