import styled from 'styled-components';
// import backgroundImg from '../../assets/img/269.jpg'
import backgroundImg from '../../assets/img/background.jpg'
import logoImg from '../../assets/img/logo.jpg'

export const Container = styled.div`
  background-image: url(${backgroundImg});
  background-size: cover;
  height: 100%;
`;

export const Card = styled.div`
  background: #1d1d1db5;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 600px;
  width: 350px;
  border-radius: 15px;
`;

export const Button = styled.button`
    background: #d81616;
    width: 130px;
    height: 50px;
    border: none;
    position: absolute;
    border-radius: 10px;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
`;

export const Label = styled.div`
  color: white;
  font-weight: 600;
  font-size: 14px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 55px;
`;

export const Img = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: url(${logoImg});
  background-size: cover;
`;

export const Text = styled.div`
  padding: 10px;
  font-size: 21px;
  text-align: center;
  line-height: 30px;
  color: #d4d0d0;
  margin-top: 20px;
`;
