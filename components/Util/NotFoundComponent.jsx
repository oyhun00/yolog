import styled from '@emotion/styled';

const NotFound = () => (
  <Wrap>
    <div>404</div>
    <div>페이지를 찾을 수 없습니다!</div>
  </Wrap>
);

const Wrap = styled.div`
  margin: 0 auto;
  text-align: center;
  
  > div:first-child {
    font-size: 5rem;
    font-weight: 500;
    text-shadow: 0 0 16px #ffffffc2;
  }
`;

export default NotFound;
