import React from 'react';
import * as S from "./style";
import data from "./data.js";
import {Container} from "../GenerallStyle";
import * as T from "../Typography";

function Customer() {
    return (
        <S.CustomerSection>
            <Container>
            <S.CustomHeader>
                        <T.H2>Customer testimonials</T.H2>
                        <T.Para>Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.</T.Para>
                    </S.CustomHeader>
        <S.GroupCustomer>
            {
              data.map(custom=>(
                <S.CardCustom>
                <S.Desc>
                    <S.ParaCustom>{custom.desc}</S.ParaCustom>
                </S.Desc>
                <S.Footer>
                    <T.H6>{custom.by} <S.Slash>/</S.Slash> <S.LinkApp>{custom.descLink}</S.LinkApp></T.H6>
                </S.Footer>
               </S.CardCustom>
              ))
          }
        </S.GroupCustomer>
        </Container>
        </S.CustomerSection>
    )
}

export default Customer
