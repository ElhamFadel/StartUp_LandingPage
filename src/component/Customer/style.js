import styled from "styled-components";
import {Para}  from "../Typography";
import {Link} from "react-router-dom";

export const CustomerSection =styled.div`
margin-bottom:4rem;
`;
export const CustomHeader = styled.div`
   display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    text-align: center;
    width: 54%;
    margin: 0 auto;
    margin: 4rem auto;
`;
export const GroupCustomer = styled.div`
   display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-right: -12px;
    margin-left: -12px;
    margin-top: -12px;
    justify-content: space-around;
`;
export const CardCustom = styled.div`
   flex-basis: 345px;
    padding: 17px 1.7rem;
    background-color: #25282c;
`;
export const ParaCustom = styled(Para)`
line-height: 1.6;
font-size: 1.15rem;
border-bottom: 2px solid #3d4246;
padding-bottom: 1.9rem;
`;
export const Slash =styled.span`
color:#9ca9b3;
`;
export const Desc = styled.div`
&::before{
    content: "";
    display: block;
    width: 24px;
    height: 18px;
    margin-top: 12px;
    margin-bottom: 16px;
    background-image: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2224%22%20height%3D%2218%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%2013.481c0-2.34.611-4.761%201.833-7.263C3.056%203.716%204.733%201.643%206.865%200L11%202.689C9.726%204.382%208.777%206.093%208.152%207.824c-.624%201.73-.936%203.578-.936%205.545V18H0v-4.519zm13%200c0-2.34.611-4.761%201.833-7.263%201.223-2.502%202.9-4.575%205.032-6.218L24%202.689c-1.274%201.693-2.223%203.404-2.848%205.135-.624%201.73-.936%203.578-.936%205.545V18H13v-4.519z%22%20fill%3D%22%236163FF%22%20fill-rule%3D%22nonzero%22%2F%3E%3C%2Fsvg%3E);
    background-repeat: no-repeat;
}
`;
export const LinkApp = styled(Link)`
color: #1cb68b;
text-decoration: none;
&:hover{
    color: #73efcc;
}
`;
export const Footer = styled.div`
    padding: 1rem 0;
`;


