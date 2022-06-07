import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px;
    background-color: ${({ color }) => color};
    cursor: pointer;
    padding: 20px 30px;
    width: 200px;
    height: 80px;
    border-radius: 10px;
    border: 1px solid black;
    text-transform: uppercase;
    color: black;
    text-decoration: none !important;
`;
