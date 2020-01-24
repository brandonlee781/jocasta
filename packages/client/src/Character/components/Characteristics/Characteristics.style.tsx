import styled from 'styled-components';

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 24px repeat(3, 56px);
  justify-content: center;
  align-content: center;
  grid-gap: 8px;
  background: rgba(229, 229, 229, 0.12);
  border-radius: 25px;
  padding: 16px 24px;
  width: 100%;

  .char-title {
    grid-column: 1 / span 2;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #DADADA;
  }
`
export const ItemWrapper = styled.div`
  display: grid;
  grid-template-areas:
    "title title"
    "icon value";
  grid-template-rows: 20px 1fr;
  grid-template-columns: 24px 24px;
  justify-content: center;
  align-content: center;
  height: 48px;
  width: 100px;

  .title {
    grid-area: title;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    color: #E2E2E2;
  }
  .icon {
    grid-area: icon;
    svg {
      fill: #DADADA;
    }
  }
  .value {
    grid-area: value;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #FFFFFF;
  }
`;