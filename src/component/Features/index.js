import React from 'react';
import * as S from "./style";
import {Container} from "../GenerallStyle";
import data from "./data";
import * as T from "../Typography";

function FeatureSection() {
    return (
        <S.FeatureWrapper>
            <Container>
                <S.FeaturesContent>
                    <S.FeatureHeader>
                        <T.H2>Build up the whole picture</T.H2>
                        <T.Para>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.</T.Para>
                    </S.FeatureHeader>
                    <S.GroupFeature>
                       {
                           data.map(feature=>(
                            <S.Features>
                            <S.IconWrapper>
                                <img src={feature.Icon} alt="dff" />
                            </S.IconWrapper>
                            <S.FeatContent>
                                <T.H4>{feature.title}</T.H4>
                                <T.ParaFeature>{feature.desc}</T.ParaFeature>
                            </S.FeatContent>
                        </S.Features>
                           ))
                       }
                    </S.GroupFeature>
                </S.FeaturesContent>
            </Container>
        </S.FeatureWrapper>
    )
}

export default FeatureSection
