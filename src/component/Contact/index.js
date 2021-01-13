import React from 'react';
import {Container} from "../GenerallStyle";
import * as S from "./style";
import * as T from "../Typography";

function Contact() {
    return (
       <section className="contact">
         <Container>
           <S.ContactInner className="contact-inner">
           <T.H3>For previewing layouts and visual?</T.H3>
           <S.Input type="email" name="email" placeholder="Your best email" />
           </S.ContactInner>
         </Container>
       </section>
    )
}

export default Contact;
