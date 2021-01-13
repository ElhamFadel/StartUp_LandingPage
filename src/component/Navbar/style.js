import styled from "styled-components";
import {Link} from "react-router-dom";

export const NavBar = styled.div`
height:80px;
position:absolute;
width:100%;
top:0;
`;
export const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 1.5rem;
    background: transparent;
    height: 80px;
`;

export const NavLink = styled(Link)`
display: block;
    color: #9ca9b3;
    font-weight: 600;
    padding: 0 55px;
    text-decoration: none;
`;
export const NavBarMenu = styled.ul`
display: flex;
    list-style: none;
    justify-content: center;
    align-items: center;
`;
export const NavLi = styled.li``;