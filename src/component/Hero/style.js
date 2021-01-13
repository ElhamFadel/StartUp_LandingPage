import styled from "styled-components";
import {BgSection1} from "../../assets";
import Button from "../Button";

export const HeroWrapper = styled.div`
   display: inline-block;
     padding-top: 11rem;
    text-align: center;
    height: 286px;
    background-image: url("${BgSection1}");
    top: 0;
    background-position: top;
    transform: translate(0%); 

`;
export const HButton = styled(Button)`
background-color: ${(props)=>props.black?"#25282c":"#6163ff"};
padding: 15px 27px;
`;
export const HeroInner = styled.div`

`;
export const HeroContent = styled.div``;
export const HeroFigure = styled.div`
    width: 80%;
    margin: 3rem auto;
    height: 30rem;
img{
    width:100%;
}
`;
export const GroupButton =styled.div`
    display: flex;
    width: 55%;
    justify-content: space-around;
    margin: 1.5rem auto;
`;
export const ContainerHeader =styled.div`
    width: 38rem;
    margin: 0 auto;
    margin: 1.4rem auto
`;
