import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  h3, h1{
      font-family: sans-serif;,
  }
`;

export const Content = styled.div`
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
`;

export const Column = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 2rem;

    h1{ 
        text-align: center;
    }

    &>input{
        width: 100%;
    }
    
`;

export const Button = styled.button`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
    background: rgb(165,171,198);
    background: radial-gradient(circle, rgba(165,171,198,1) 0%, rgba(32,34,71,1) 100%);

    strong{
        font-size:2rem;
        color: #fff;
    }
    
    p{ 
        margin: 8px 0 0;
        color: #ddd;
    }
`;

export const Row = styled.div`
    button{
        border: none;
        border-radius: 5px;
        padding: 8px;
        margin: 8px 0;
        color: #fff;
        background: rgb(6,28,55);
        background: radial-gradient(circle, rgba(6,28,55,1) 18%, rgba(48,48,48,1) 100%);
    }
    display: flex;
    flex-direction: row;
    &>input{
        width: 50px;
        margin: 0 1rem;
    }
`;

export const Divisor = styled.div``;

