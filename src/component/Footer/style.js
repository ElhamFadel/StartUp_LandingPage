import styled from "styled-components";
import {Para} from "../Typography";
import {Link} from "react-router-dom";
export const FooterSection = styled.div``;
export const FooterContant = styled.div`
display: flex;
justify-content: space-between;
-webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 3rem 0;
`;
export const FooterLeft = styled.div`
display: flex;
flex-direction: column;
display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 5.2rem;
    justify-content: space-between;
`;
export const NavLink = styled(Link)`
text-decoration:none;
color: #9ca9b3;
font-size: 14px;
margin-right: 14px;
display:block;
&:hover{
    color:#fff;
}
`;
export const ParaFoot= styled(Para)`
display:flex;
color: #9ca9b3;
font-size: 14px;
${NavLink}{
    margin:0;
    padding-left:3px;
    color:#fff;
}
`;
export const FooterRight = styled.div`
display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-around;
`;
export const SocialFooter = styled.div`
display: flex;
align-self: flex-end;
svg{
    color: #6163ff;
    font-size: 1.15rem;
    cursor: pointer;
    svg:hover{
    color: #fff;
    fill: #6163ff;
    transition: fill .15s ease;
    }
}
`;
export const NavLi = styled.div``;
export const NavFooter = styled.div`
display:flex;


`;


