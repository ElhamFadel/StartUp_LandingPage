import React from 'react';
import {Container} from "../GenerallStyle";
import * as S from "./style";
import {H1,Para} from "../Typography";
import {VideoImg} from "../../assets";
function Hero() {
    return (
        <S.HeroWrapper>
          <Container>
              <S.HeroInner>
                  <S.HeroContent>
                 <H1>Landing template for <span> startups </span></H1>
                 <S.ContainerHeader>
                 <Para>Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</Para>
                 <S.GroupButton>
                 <S.HButton>Get Started</S.HButton>
                 <S.HButton black>View on Github</S.HButton>
                 </S.GroupButton>
                 </S.ContainerHeader>
                  </S.HeroContent>
                  <S.HeroFigure>
                    <img src={VideoImg} alt="video"/>
                  </S.HeroFigure>
              </S.HeroInner>
          </Container>
        </S.HeroWrapper>
        
    )
}

export default Hero
