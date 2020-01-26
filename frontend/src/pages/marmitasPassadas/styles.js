import styled from 'styled-components';
import bgImg from '../../assets/img/background.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${bgImg});
  background-size: cover;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Card = styled.div`
  margin: 20px;
  width: 200px;
  height: 150px;
  border-radius: 15px;
  background: #1d1d1db5;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Text = styled.div`
  padding: 10px;
  font-size: 14px;
  text-align: center;
  color: #fff;
  font-weight: 700;
`;
