import styled from "styled-components";
import {bg2} from "../../assets";
export const WorkeWrapper = styled.div`
    background-image:  url("${bg2}");
    background-position: 50% center;
    height: 109rem;
    background-repeat:no-repeat;
`;
export const WorksContent = styled.div``;
export const WorkHeader = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 58%;
    margin: 0 auto;
    margin: 4rem auto;
`;
export const GroupWork = styled.div``;
export const WorkFolwCard = styled.div`
overflow: hidden;
display: flex;

`;
export const WorkFlow = styled.div`
padding: 3rem 1rem;
    display: flex;
    justify-content: space-between;
    flex-flow:${props=>props.className==="even"?"row-reverse":"initial"}
`;
export const ImageWrapper = styled.div`
height: 25rem;
    width: 49%;
    img{
        width:100%;
    }
`;
export const WorkContent = styled.div`
width:45%;
display: flex;
flex-direction: column;
align-self: center;
`;


