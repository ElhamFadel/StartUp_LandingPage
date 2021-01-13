import React from 'react';
import * as S from "./style";
import {Container} from "../GenerallStyle";
import {Logo} from "../../assets";
import { FaFacebookF,FaInstagram,FaTwitter } from 'react-icons/fa';
function Footer() {
    return (
        <S.FooterSection>
          <Container>
              <S.FooterContant>
              <S.FooterLeft>
              <S.NavLink>
                    <Logo />
                </S.NavLink>
                  <S.ParaFoot>Made by  <S.NavLink> {" "} Cruip </S.NavLink>. All right reserved</S.ParaFoot>
                </S.FooterLeft>
                  <S.FooterRight>
                  <S.SocialFooter>
                    <S.NavLi>
                        <S.NavLink to="/">
                         <FaFacebookF />
                        </S.NavLink>
                  </S.NavLi>
                  <S.NavLi>
                        <S.NavLink to="/">
                        <FaTwitter  />
                        </S.NavLink>
                  </S.NavLi>
                  <S.NavLi>
                        <S.NavLink to="/">
                        <FaInstagram />
                        </S.NavLink>
                  </S.NavLi>
                    </S.SocialFooter>
                    <S.NavFooter>
                    <S.NavLi>
                        <S.NavLink to="/">
                          Contact
                        </S.NavLink>
                  </S.NavLi>
                  <S.NavLi>
                        <S.NavLink to="/">
                         About us
                        </S.NavLink>
                  </S.NavLi>
                  <S.NavLi>
                        <S.NavLink to="/">
                        FAQ's
                        </S.NavLink>
                  </S.NavLi>
                  <S.NavLi>
                        <S.NavLink to="/">
                         Support
                        </S.NavLink>
                  </S.NavLi>
                    </S.NavFooter>
                  </S.FooterRight>
                  
              </S.FooterContant>
          </Container>
        </S.FooterSection>
    )
}

export default Footer;
