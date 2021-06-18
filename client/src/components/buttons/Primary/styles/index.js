import styled from 'styled-components';

export const Button = styled.button`
  height: 3.2rem;
  width: 12.5rem;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to right, #007adf 0%, #00ecbc 100%);
  /* background-image: linear-gradient(
    112.4deg,
    rgba(169, 28, 115, 1) 21.6%,
    rgba(219, 112, 54, 1) 92.2%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff7070",endColorstr="#530587",GradientType=1); */
  color: #fff;
  cursor: pointer;
  border: none;
  :hover {
    background-image: linear-gradient(to left, #007adf 0%, #00ecbc 100%);
  }
  p {
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 1px;
    color: #131628;
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 800px) {
    width: 8rem;
    height: 2.5rem;
    p {
      font-size: 0.6rem;
    }
  }
  @media (max-width: 600px) {
    /* width: 5rem; */
    /* height: 1.9rem; */
    margin-left: 8rem;
    margin-right: 8rem;
    p {
      font-size: 0.5rem;
    }
  }
`;
