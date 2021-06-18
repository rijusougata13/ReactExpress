import styled from 'styled-components';
export const Button = styled.button`
  height: 3rem;
  width: 8rem;
  text-align: center;
  border-radius: 40px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border: 2px solid transparent;
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
    linear-gradient(112.4deg, rgba(169, 28, 115, 1) 21.6%, rgba(219, 112, 54, 1) 92.2%);
  background-origin: border-box;
  box-shadow: 2px 1000px 1px #fff inset;
  p {
    background-color: red;

    background-image: linear-gradient(45deg, #f3ec78, #af4261);

    background-size: 100%;
    background-repeat: repeat;
    background-clip: text;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }

  :hover {
    box-shadow: none;
    color: white;
  }
  p {
    font-size: 0.8rem;
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 800px) {
    width: 5rem;
    height: 2.2rem;
    p {
      font-size: 0.6rem;
    }
  }
  @media (max-width: 600px) {
    width: 4.2rem;
    height: 1.9rem;
    p {
      font-size: 0.5rem;
    }
  }
`;
