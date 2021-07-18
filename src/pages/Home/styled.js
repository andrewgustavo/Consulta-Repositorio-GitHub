import styled from 'styled-components';

export const HomeContainer= styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Container = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 1.5rem;
    pagging: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;

    &:focus,
    &:active {
        outline:none;
        box-shadow:none;
    }
`;

export const Button = styled.button`
    height: 1.75rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;

    &:focus,
    &:active {
        outline:none;
        box-shadow:none;
    }
`;

export const ErrorMsg = styled.span`
    display: block;
    font-size: 0.75rem;
    color: red;
    font-weight: 600;
    margin-top: 0.5rem;
    
`
