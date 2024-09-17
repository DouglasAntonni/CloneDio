import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 90%; 
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #ffffff;
`;

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
`;

export const SubTitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    width: 320px;
    margin-bottom: 35px;
    line-height: 25px;
`;

export const EsqueciButton = styled.button`
    
    background: none; 
    border: none;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    cursor: pointer;
    color: #e5e044;
        &:hover{
        opacity:0.7;
        }
    `;



export const Wrapper = styled.div`
    max-width: 300px;
`;

export const Column = styled.div`
    flex: 1;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;    
    margin-top: 20px;
`;

export const ErrorText = styled.p`
    color: #ff0000;
    font-size: 12px;
    margin: 5px 0;
`;
export const ButtonCreateAccount = styled.button`
  background: none; 
  border: none;
  color: #E3185E;
  
  cursor: pointer;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
     &:hover{
        opacity:0.7;
        }
`;