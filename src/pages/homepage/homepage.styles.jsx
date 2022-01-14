import styled from 'styled-components';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
  padding-top: 70px;

  @media screen and (max-width: 800px) {
    padding: 10px 20px;
    padding-top: 60px;
  }

  @media screen and (max-width: 500px) {
    padding: 10px 5px;
    padding-top: 60px;
  }
  `;

