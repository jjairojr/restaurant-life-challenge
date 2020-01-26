import styled from 'styled-components';
import drinkImg from '../../assets/img/drink.png';
import marmitaImg from '../../assets/img/marmita1.png';
import bgImg from '../../assets/img/background.jpg';

export const AllContainer = styled.div`
  background-image: url(${bgImg});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background: #fff;
  display: flex;
  position: relative;
  height: 400px;
  width: 350px;
  border-radius: 15px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

export const ButtonContainer = styled.div`
    width: 130px;
    height: 50px;
    border: none;
    position: absolute;
    border-radius: 10px;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    display: flex;
    width: 100%;
    height: 60px
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

export const Text = styled.div`
  padding: 10px;
  font-size: 14px;
  text-align: center;
  color: #fff;
  font-weight: 700;
`;


export const Circle = styled.div`
  width: 400px;
  display: flex;
  height: 400px;
  justify-content: center;
  align-items: flex-start;
  border-radius: 100%;
  background: #fff;
  background-image: url(${props => props.marmitaImg ? marmitaImg : ''});
  background-repeat: no-repeat;
  background-position: center;
`;

export const CircleMenor = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 300px;
  height: 300px;
  border-radius: 100%;
  background: #fff;
  margin-top: 150px;
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${props => props.imagebg ? props.imagebg : drinkImg});
`;

export const Sliders = styled.div`
  width: 200px;
`;

export const FoodContainer = styled.div`
  display: flex;
  margin-left: 50px;
`;

export const TitleContainer = styled.div`
  background: #f50057;
  margin-top: 60px;
  border-radius: 15px;
  max-width: 300px;
`;
