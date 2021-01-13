
import React from 'react';
import * as S from "./style";
import data from "./data";
import * as T from "../Typography";
import {Container} from "../GenerallStyle";


function WorkFlow() {
    return (
        <S.WorkeWrapper>
            <Container>
                <S.WorksContent>
                    <S.WorkHeader>
                        <T.H2>Workflow that just works</T.H2>
                        <T.Para>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.</T.Para>
                    </S.WorkHeader>
                    <S.GroupWork>
                       {
                            data.map((work,index)=>(
                            <S.WorkFolwCard >
                            <S.WorkFlow className={((index+1)%2)===0?"even":"odd"}>
                            <S.WorkContent>
                                <T.H5>{work.title5}</T.H5>
                                <T.H3>{work.title}</T.H3>
                                <T.Para>{work.desc}</T.Para>
                            </S.WorkContent>
                            <S.ImageWrapper>
                                <img src={work.image} alt="dff" />
                            </S.ImageWrapper>
                        </S.WorkFlow>
                        </S.WorkFolwCard>
                           ))
                          
                       }
                    </S.GroupWork>
                </S.WorksContent>
            </Container>
        </S.WorkeWrapper>
    )
}

export default WorkFlow
