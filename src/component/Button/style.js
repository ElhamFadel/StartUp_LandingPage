import styled from "styled-components";
import {Link} from "react-router-dom";
export const Button = styled(Link)`
    text-decoration: none;
    background: #6163ff;
    color: #fff;
    padding: 10px 25px;
    border-radius: 3px;
    display:inline-flex;
    justify-content:center;
    align-items:center;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    transition:background .15s ease;
    cursor: pointer;
    &:hover{
    background-color: #6b6dff;
    }
`;

