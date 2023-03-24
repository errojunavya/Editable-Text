import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #f5d0fe;
  display: flex;

  justify-content: center;
  align-items: center;
`
export const CardContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 500px;
  border-radius: 10px;
`
export const Heading = styled.h1`
  color: #000000;
  font-size: 30px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const InputContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  height: 40px;
`

export const Input = styled.input`
  height: 40px;
  width: 260px;
  border-color: #cbd2d9;
  border-width: 1px;
  border-radius: 10px;
  margin-right: 10px;
`
export const Button = styled.button`
  background-color: #d946ef;
  color: #ffffff;
  height: 40px;
  width: 60px;
  padding: 10px;
  border: 0;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
`

export const Para = styled.p`
  display: inline;
  margin-right: 10px;
  height: 40px;
  font-size: 20px;
  font-weight: 500;
  color: #323f4b;
`
